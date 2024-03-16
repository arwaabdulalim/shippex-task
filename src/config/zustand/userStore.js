import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import storage from '../../services/storage';

const mmkvStorage: StateStorage = {
  getItem: name => storage.get(name),
  setItem: (name, value) => storage.set(name, value),
  removeItem: name => storage.remove(name),
};

export const useUserStore = create(
  persist(
    (set, get) => ({
      isSignedIn: false,
      setIsSignedIn: isSignedIn => set({ isSignedIn }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
);
