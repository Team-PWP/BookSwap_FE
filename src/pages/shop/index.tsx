// import { useState, useEffect } from 'react';
import { useEffect } from 'react';

import { TitleContainer } from './components/TitleContainer.tsx';
import { UserInfoLayout } from './components/UserInfoLayout.tsx';
import * as Styles from './styles';
import { myInfo } from '@/apis/shop/shop.api.ts';
import shopImg from '@/assets/Shop.png';
// import { UserInfo } from '@/pages/shop/type';
import { useUserInfoStore } from '@/store/useUserInfoStore';

export const ShopPage: React.FC = () => {
  // const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  //
  // const { userId, nickname, email, username } = useUserInfoStore<UserInfoState>(
  //   (state) => state
  // );
  // const { setUserId, setNickname, setEmail, setUsername } = useUserInfoStore();
  // //
  // //
  // useEffect(() => {
  //   const fetchMyInfo = async () => {
  //     try {
  //       const data = await myInfo();
  //
  //       console.log(
  //         'index.tsx: ',
  //         data.userId,
  //         data.nickname,
  //         data.email,
  //         data.username
  //       );
  //       setUserId(data.userId);
  //       setNickname(data.nickname);
  //       setEmail(data.email);
  //       setUsername(data.username);
  //     } catch (error) {
  //       console.error('유저 정보 받아오기 실패 :', error);
  //     }
  //   };
  //
  //   fetchMyInfo();
  // }, []);

  // if (!userInfo) {
  //   return <div>loading...</div>;
  // }
  // console.log(userInfo);

  // const { nickname, email } = userInfo;
  return (
    <Styles.ShopLayout>
      <TitleContainer />
      <UserInfoLayout
        shopImg={shopImg}
        // userInfo={userInfo}
      />
    </Styles.ShopLayout>
  );
};
