
import { createContext } from 'react';

export type Alignment = 'Neutral' | 'Light' | 'Dark';

export interface Character {
  id: string;
  name: string;
  classId: string;
  skills: Record<string, boolean>;
  spells: Record<string, boolean>;
}

export interface Profile {
  id: string;
  name: string;
  alignment: Alignment;
  party: Character[];
  quests: Record<string, boolean>;
  alchemy: Record<string, boolean>;
  general: Record<string, boolean>;
}

export interface AppContextType {
  profiles: Profile[];
  activeProfileId: string | null;
  activeProfile: Profile | null;
  createProfile: (name: string) => void;
  deleteProfile: (id: string) => void;
  setActiveProfileId: (id: string) => void;
  updateProfile: (updates: Partial<Profile>) => void;
  updateCharacter: (charIndex: number, updates: Partial<Character>) => void;
  toggleChecklist: (category: 'quests' | 'alchemy' | 'general', key: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
