import { create } from 'zustand';

export interface AuthState {
  accessToken: string;
  setAccessToken: (token: string) => void;
  logOut: () => void;
}
export const useStore = create<AuthState>((set) => ({
  // access Token
  accessToken: '',

  // access Token 저장
  setAccessToken: (token: string) => set({ accessToken: token }),

  // 로그아웃
  logOut: () => set({ accessToken: '' }),
}));

