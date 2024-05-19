import { useEffect, useState } from 'react';

import * as Styles from '../styles.ts';
import { FixNickName, myInfo } from '@/apis/shop/shop.api';
import { NicknameSectionProps } from '@/pages/shop/type.ts';
import { useUserInfoStore } from '@/store/useUserInfoStore.ts';

export const NicknameSection: React.FC<NicknameSectionProps> = ({
  nickname,
}) => {
  const [newNickname, setNewNickname] = useState<string>(nickname);
  console.log('nicknameSection:', nickname);

  // console.log('nicknameSection out:', nickname);
  const HandlerNickname = async () => {
    const reNickName: string | null = prompt('변경할 닉네임을 입력해주세요');
    console.log(reNickName);


    if (reNickName) {
      try {
        const request = { nickname: reNickName };
        const data = await FixNickName(request);
        // setNewNickName(data);
        console.log(data);
        alert(`닉네임을 ${reNickName}(으)로 변경하였습니다!`);
        setNewNickname(reNickName);
      } catch (error) {
        alert('닉네임 변경에 실패했습니다.');
        console.error('유저 정보 받아오기 실패 :', error);
      }
    }
  };

  return (
    <Styles.InfoContainer>
      <Styles.NicknameItem>{nickname}</Styles.NicknameItem>
      <Styles.NicknameEdit onClick={HandlerNickname}>
        닉네임 수정
      </Styles.NicknameEdit>
    </Styles.InfoContainer>
  );
};
