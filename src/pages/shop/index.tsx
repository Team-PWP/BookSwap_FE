import { useState, useEffect } from 'react';

import { TitleContainer } from './components/TitleContainer.tsx';
import { UserInfoLayout } from './components/UserInfoLayout.tsx';
import * as Styles from './styles';
import { myInfo } from '@/apis/shop/shop.api.ts';
import shopImg from '@/assets/Shop.png';
import { UserInfo } from '@/pages/shop/type';

export const ShopPage: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchMyInfo = async () => {
      try {
        const data = await myInfo();
        setUserInfo(data);
      } catch (error) {
        console.error('유저 정보 받아오기 실패 :', error);
      }
    };

    fetchMyInfo();
  }, []);

  if (!userInfo) {
    return <div>loading...</div>;
  }

  // const { nickname, email } = userInfo;
  return (
    <Styles.ShopLayout>
      <TitleContainer />
      <UserInfoLayout shopImg={shopImg} userInfo={userInfo} />
    </Styles.ShopLayout>
  );
};
