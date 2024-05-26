import { create } from 'zustand';

interface AuctionState {
  newBidPrice: number;

  setNewBidPrice: (price: number) => void;
}

export const useAuctionStore = create<AuctionState>((set) => ({
  newBidPrice: 0,

  setNewBidPrice: (price) => set({ newBidPrice: price }),
}));
