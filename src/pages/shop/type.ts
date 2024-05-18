export interface UserInfoLayoutProps {
  shopImg: string;
  nickname?: string;
  userInfo: UserInfo;
}

export interface UserInfo {
  id: number;
  nickname: string;
  email: string;
  userName: string;
}

export interface NicknameSectionProps {
  nickname: string;
}

export interface EmailSectionProps {
  email?: string;
}

export interface UserInfoContainerProps {
  nickname?: string | undefined;
  userInfo: UserInfo;
}