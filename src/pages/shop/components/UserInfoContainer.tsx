import * as Styles from '../styles.ts';
import { EmailSection } from './EmailSection';
import { NicknameSection } from './NickNameSection';
import { UserInfoContainerProps } from '@/pages/shop/type';

export const UserInfoContainer: React.FC<UserInfoContainerProps> = ({
  userInfo,
}) => {
  return (
    <Styles.UserInfoContainer>
      <NicknameSection nickname={userInfo.nickname} />
      <EmailSection email={userInfo.email} />
    </Styles.UserInfoContainer>
  );
};
