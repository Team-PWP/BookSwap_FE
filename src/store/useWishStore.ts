import { create } from 'zustand';

interface wishState {
  wishCount: number;
  setWishCount: (wishCount: number) => void;
}
export const useWishStore = create<wishState>((set) => ({
  wishCount: 0,
  setWishCount: (wishCount: number) => set({ wishCount }),
}));
