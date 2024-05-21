import create from 'zustand';

interface AuthStore {
  token: string;
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: localStorage.getItem('accessToken') || '',
}));
