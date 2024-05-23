export interface UserInfoLayoutProps {
  shopImg: string;
  nickname?: string;
  // userInfo: UserInfo;
}

export interface UserInfo {
  userId: number;
  nickname: string;
  email: string;
  username: string;
}

export interface NicknameSectionProps {
  nickname: string;
}

export interface EmailSectionProps {
  email?: string;
}

export interface UserInfoContainerProps {
  nickname?: string;
  // userInfo: UserInfo;
}
