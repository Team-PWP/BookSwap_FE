import create from 'zustand';

interface BuyoutState {
  buyoutPrice: number;
  setBuyoutPrice: (buyoutPrice: number) => void;
}

export const useBuyoutStore = create<BuyoutState>((set) => ({
  buyoutPrice: 0,
  setBuyoutPrice: (buyoutPrice: number) => set({ buyoutPrice }),
}));
