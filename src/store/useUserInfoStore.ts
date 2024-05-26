import { create } from 'zustand';

interface UserInfoState {
  userId: number;
  setUserId: (userId: number) => void;
  nickname: string;
  setNickname: (nickname: string) => void;
  email: string;
  setEmail: (email: string) => void;
  username: string;
  setUsername: (username: string) => void;
}

export const useUserInfoStore = create<UserInfoState>((set) => ({
  userId: 3,
  nickname: 'nickname',
  email: 'email',
  username: 'username',
  setUserId: (userId: number) => set({ userId }),
  setNickname: (nickname: string) => set({ nickname }),
  setEmail: (email: string) => set({ email }),
  setUsername: (username: string) => set({ username }),
}));
//   setUserId: () => set((state) => ({})),
//   setNickname: () => set((state) => ({})),
//   setEmail: () => set((state) => ({})),
//   setUsername: () => set((state) => ({})),
// }));

// const store = (set) => ({
//   count: 0,
//   upCount: () =>
//     set((state) => ({
//       count: state.count + 1,
//     })),
//   downCount: () =>
//     set((state) => ({
//       count: state.count - 1,
//     })),
//   resetCount: () =>
//     set({
//       count: 0,
//     }),
// });
