
import { useState, useEffect, type ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import LZString from 'lz-string';
import { AppContext, type Profile, type Character } from './MM7Context';

const STORAGE_KEY = 'mm7_checklist_data';
const IMPORT_PARAM = 'import_data';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [profiles, setProfiles] = useState<Profile[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    // Migration logic for old data format
    const parsed = JSON.parse(stored);
    return parsed.map((p: Record<string, unknown> & { stage?: string; alignment?: string }) => ({
      ...p,
      stage: p.stage || (p.alignment === 'Neutral' ? 'Base' : p.alignment || 'Base')
    }));
  });

  const [activeProfileId, setActiveProfileId] = useState<string | null>(() => {
    if (profiles.length > 0) return profiles[0].id;
    return null;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
  }, [profiles]);

  // Import logic
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const importData = params.get(IMPORT_PARAM);

    if (importData) {
      try {
        const decompressed = LZString.decompressFromEncodedURIComponent(importData);
        if (decompressed) {
          const payload = JSON.parse(decompressed);
          if (payload && payload.data && payload.data.name) {
            const newProfile = payload.data as Profile;
            const existing = profiles.find(p => p.name === newProfile.name);

            if (existing) {
              if (window.confirm(`Profile '${newProfile.name}' already exists. Overwrite?`)) {
                // Preserve the local ID to avoid navigation issues
                newProfile.id = existing.id;
                setProfiles(prev => prev.map(p => p.id === existing.id ? newProfile : p));
              }
            } else {
              // Generate new IDs to avoid collisions
              newProfile.id = uuidv4();
              newProfile.party = newProfile.party.map(c => ({ ...c, id: uuidv4() }));

              setProfiles(prev => [...prev, newProfile]);
              setActiveProfileId(newProfile.id);
            }
          }
        }
      } catch (e) {
        console.error('Failed to import profile', e);
        alert('Failed to import profile: Invalid data.');
      } finally {
        // Clean URL
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.delete(IMPORT_PARAM);
        window.history.replaceState({}, '', newUrl.toString());
      }
    }
  }, []); // Run once on mount

  const activeProfile = profiles.find(p => p.id === activeProfileId) || null;

  const createProfile = (name: string) => {
    const newProfile: Profile = {
      id: uuidv4(),
      name,
      stage: 'Base',
      party: Array(4).fill(null).map(() => ({
        id: uuidv4(),
        name: '',
        classId: 'knight',
        skills: {},
        spells: {}
      })),
      quests: {},
      alchemy: {},
      general: {}
    };
    setProfiles(prev => [...prev, newProfile]);
    setActiveProfileId(newProfile.id);
  };

  const deleteProfile = (id: string) => {
    setProfiles(prev => prev.filter(p => p.id !== id));
    if (activeProfileId === id) {
      setActiveProfileId(null);
    }
  };

  const updateProfile = (updates: Partial<Profile>) => {
    if (!activeProfileId) return;
    setProfiles(prev => prev.map(p =>
      p.id === activeProfileId ? { ...p, ...updates } : p
    ));
  };

  const updateCharacter = (charIndex: number, updates: Partial<Character>) => {
    if (!activeProfile) return;
    const newParty = [...activeProfile.party];
    newParty[charIndex] = { ...newParty[charIndex], ...updates };
    updateProfile({ party: newParty });
  };

  const toggleChecklist = (category: 'quests' | 'alchemy' | 'general', key: string) => {
    if (!activeProfile) return;
    const currentMap = activeProfile[category];
    updateProfile({
      [category]: {
        ...currentMap,
        [key]: !currentMap[key]
      }
    });
  };

  const exportProfile = (id: string) => {
    const profile = profiles.find(p => p.id === id);
    if (!profile) return '';

    const payload = { version: 1, data: profile };
    const compressed = LZString.compressToEncodedURIComponent(JSON.stringify(payload));

    const url = new URL(window.location.href);
    url.searchParams.delete(IMPORT_PARAM);
    url.searchParams.set(IMPORT_PARAM, compressed);
    return url.toString();
  };

  return (
    <AppContext.Provider value={{
      profiles,
      activeProfileId,
      activeProfile,
      createProfile,
      deleteProfile,
      setActiveProfileId,
      updateProfile,
      updateCharacter,
      toggleChecklist,
      exportProfile
    }}>
      {children}
    </AppContext.Provider>
  );
};
