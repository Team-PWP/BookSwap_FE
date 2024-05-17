import * as Styles from '../styles.ts';
import { EmailSection } from './EmailSection';
import { NicknameSection } from './NickNameSection';

export const UserInfoContainer = () => {
  return (
    <Styles.UserInfoContainer>
      <NicknameSection />
      <EmailSection />
    </Styles.UserInfoContainer>
  );
};
