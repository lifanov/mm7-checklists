
import { useState, useEffect, type ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import LZString from 'lz-string';
import { AppContext, type Profile, type Character, type Path, type PromotionType } from './MM7Context';

const STORAGE_KEY = 'mm7_checklist_data';
const IMPORT_PARAM = 'import_data';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [profiles, setProfiles] = useState<Profile[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    try {
      const parsed = JSON.parse(stored);
      // Migration logic for old data formats
      // Check for legacy array or object wrapper if needed, but assuming parsed is Profile[]

      return parsed.map((p: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
        let path: Path = 'Neutral';
        const party = Array.isArray(p.party) ? p.party : [];

        // Check if old 'stage' exists
        if (p.stage) {
          if (p.stage === 'Base' || p.stage === 'First') path = 'Neutral';
          else if (p.stage === 'Light') path = 'Light';
          else if (p.stage === 'Dark') path = 'Dark';
        } else if (p.path) {
          path = p.path;
        }

        // Migrate Party
        const migratedParty = party.map((c: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
          let promotion: PromotionType = 'base';
          if (c.promotion) {
            promotion = c.promotion;
          } else if (p.stage) {
            // Map old stage to promotion if not present
            if (p.stage === 'Base') promotion = 'base';
            else if (p.stage === 'First') promotion = 'first';
            else if (p.stage === 'Light') promotion = 'light';
            else if (p.stage === 'Dark') promotion = 'dark';
          }
          return { ...c, promotion };
        });

        // Clean up old fields
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { stage, ...rest } = p;

        return {
          ...rest,
          path,
          party: migratedParty
        };
      });
    } catch (e) {
      console.error('Failed to migrate profiles', e);
      return [];
    }
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
            const rawProfile = payload.data;
            // Run migration on imported profile just in case it's old
            const p = rawProfile;
            let path: Path = 'Neutral';
            if (p.stage) {
              if (p.stage === 'Base' || p.stage === 'First') path = 'Neutral';
              else if (p.stage === 'Light') path = 'Light';
              else if (p.stage === 'Dark') path = 'Dark';
            } else if (p.path) {
              path = p.path;
            }

            const migratedParty = (p.party || []).map((c: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
              let promotion: PromotionType = 'base';
              if (c.promotion) {
                promotion = c.promotion;
              } else if (p.stage) {
                if (p.stage === 'Base') promotion = 'base';
                else if (p.stage === 'First') promotion = 'first';
                else if (p.stage === 'Light') promotion = 'light';
                else if (p.stage === 'Dark') promotion = 'dark';
              }
              return { ...c, promotion };
            });

             // eslint-disable-next-line @typescript-eslint/no-unused-vars
             const { stage, ...rest } = p;
             const newProfile: Profile = {
               ...rest,
               path,
               party: migratedParty
             };

            const existing = profiles.find(prof => prof.name === newProfile.name);

            if (existing) {
              if (window.confirm(`Profile '${newProfile.name}' already exists. Overwrite?`)) {
                // Preserve the local ID to avoid navigation issues
                newProfile.id = existing.id;
                setProfiles(prev => prev.map(prof => prof.id === existing.id ? newProfile : prof));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount

  const activeProfile = profiles.find(p => p.id === activeProfileId) || null;

  const createProfile = (name: string) => {
    const newProfile: Profile = {
      id: uuidv4(),
      name,
      path: 'Neutral',
      party: Array(4).fill(null).map(() => ({
        id: uuidv4(),
        name: '',
        classId: 'knight',
        promotion: 'base',
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
