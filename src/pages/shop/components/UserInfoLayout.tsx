import * as Styles from '../styles.ts';
import { UserInfoContainer } from './UserInfoContainer.tsx';
import { UserInfoLayoutProps } from '@/pages/shop/type.ts';

export const UserInfoLayout: React.FC<UserInfoLayoutProps> = ({ shopImg }) => {
  return (
    <Styles.UserInfoLayout>
      <Styles.UserImg src={shopImg} />
      <UserInfoContainer />
    </Styles.UserInfoLayout>
  );
};
