
import { useState, useEffect, type ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AppContext, type Profile, type Character } from './MM7Context';

const STORAGE_KEY = 'mm7_checklist_data';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [profiles, setProfiles] = useState<Profile[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    // Migration logic for old data format
    const parsed = JSON.parse(stored);
    return parsed.map((p: any) => ({
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
      toggleChecklist
    }}>
      {children}
    </AppContext.Provider>
  );
};
