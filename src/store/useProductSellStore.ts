import { create } from 'zustand';

interface ProductSellState {
  sellerId: number;
  setSellerId: (sellerId: number) => void;
  title: string;
  setTitle: (title: string) => void;
  content: string;
  setContent: (content: string) => void;
  buyoutPrice: number;
  setBuyoutPrice: (buyoutPrice: number) => void;
  minPrice: number;
  setMinPrice: (minPrice: number) => void;
  createdAt: string;
  setCreatedAt: (createdAt: string) => void;
  bidStartAt: string;
  setBidStartAt: (bidStartAt: string) => void;
  bidEndAt: string;
  setBidEndAt: (bidEndAt: string) => void;
  imageUrl: File[];
  setImageUrl: (imageUrl: File[]) => void;
}

export const useProductSellStore = create<ProductSellState>((set) => ({
  sellerId: 0,
  title: 'title',
  content: 'nickname',
  buyoutPrice: 0,
  minPrice: 0,
  createdAt: 'createdAt',
  bidStartAt: 'bidStartAt',
  bidEndAt: 'bidEndAt',
  imageUrl: [],
  setSellerId: (sellerId: number) => set({ sellerId }),
  setTitle: (title: string) => set({ title }),
  setContent: (content: string) => set({ content }),
  setBuyoutPrice: (buyoutPrice: number) => set({ buyoutPrice }),
  setMinPrice: (minPrice: number) => set({ minPrice }),
  setCreatedAt: (createdAt: string) => set({ createdAt }),
  setBidStartAt: (bidStartAt: string) => set({ bidStartAt }),
  setBidEndAt: (bidEndAt: string) => set({ bidEndAt }),
  setImageUrl: (imageUrl: File[]) => set({ imageUrl }),
}));
