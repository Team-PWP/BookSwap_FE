import { create } from 'zustand';

interface UserInfoState {
  userId: number;
  setUserId: (userId: number) => void;
  // nickname: string;
  // setNickname: (nickname: string) => void;
  email: string;
  setEmail: (email: string) => void;
  username: string;
  setUsername: (username: string) => void;
}

interface UserNicknameState {
  nickname: string;
  setNickname: (nickname: string) => void;
}

export const useUserInfoStore = create<UserInfoState>((set) => ({
  userId: 3,
  // nickname: 'nickname',
  email: 'email',
  username: 'username',
  setUserId: (userId: number) => set({ userId }),
  // setNickname: (nickname: string) => set({ nickname }),
  setEmail: (email: string) => set({ email }),
  setUsername: (username: string) => set({ username }),
}));

export const useNicknameStore = create<UserNicknameState>((set) => ({
  nickname: 'nickname',
  setNickname: (nickname: string) => set({ nickname }),
}));
