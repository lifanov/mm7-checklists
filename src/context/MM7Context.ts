
import { createContext } from 'react';

export type Path = 'Neutral' | 'Light' | 'Dark';
export type PromotionType = 'base' | 'first' | 'light' | 'dark';

export interface Character {
  id: string;
  name: string;
  classId: string;
  promotion: PromotionType;
  skills: Record<string, boolean>;
  spells: Record<string, boolean>;
}

export interface Profile {
  id: string;
  name: string;
  path: Path;
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
  exportProfile: (id: string) => string;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
