import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UsernameStore {
    username: string;
    setUsername: (username: string) => void;
}

const useUsernameStore = create<UsernameStore>()(
    persist(
        (set) => ({
            username: 'Player',
            setUsername: (username: string) => set({ username }),
        }),
        {
            name: 'username-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useUsernameStore;