import { create } from 'zustand';

interface RoomInfoState {
  roomId: number;
  setRoomId: (roomId: number) => void;
}

export const useRoomInfoStore = create<RoomInfoState>((set) => ({
  roomId: 0,
  setRoomId: (roomId: number) => set({ roomId }),
}));
