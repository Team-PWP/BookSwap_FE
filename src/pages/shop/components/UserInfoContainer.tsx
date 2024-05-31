import { useEffect } from 'react';

import * as Styles from '../styles.ts';
import { EmailSection } from './EmailSection';
import { NicknameSection } from './NickNameSection';
import { myInfo } from '@/apis/shop/shop.api.ts';
import { UserInfoContainerProps } from '@/pages/shop/type';
import { useUserInfoStore } from '@/store/useUserInfoStore.ts';

export const UserInfoContainer: React.FC<UserInfoContainerProps> = () => {
  // const { userId, nickname, email, username } = useUserInfoStore();
  // console.log(userId, nickname, email, username);
  const { setUserId, setNickname, setEmail, setUsername, email } =
    useUserInfoStore();

  useEffect(() => {
    const fetchMyInfo = async () => {
      try {
        const data = await myInfo();

        setUserId(data.userId);
        setNickname(data.nickname);
        setEmail(data.email);
        setUsername(data.username);
      } catch (error) {
        console.error('유저 정보 받아오기 실패 :', error);
      }
    };

    fetchMyInfo();
  }, [setEmail, setNickname, setUserId, setUsername]);

  return (
    <Styles.UserInfoContainer>
      <NicknameSection />
      <EmailSection email={email} />
    </Styles.UserInfoContainer>
  );
};
