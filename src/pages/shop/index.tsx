import { TitleContainer } from './components/TitleContainer.tsx';
import { UserInfoLayout } from './components/UserInfoLayout.tsx';
import * as Styles from './styles';
import shopImg from '@/assets/Shop.png';

export const ShopPage: React.FC = () => {
  return (
    <Styles.ShopLayout>
      <TitleContainer />
      <UserInfoLayout shopImg={shopImg} />
    </Styles.ShopLayout>
  );
};
