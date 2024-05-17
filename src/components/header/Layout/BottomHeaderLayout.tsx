import * as Styles from '../styles.ts';
import { NavItem } from './NavItem';
import ChatIcon from '@/assets/Chatting-Icon.svg';
import ProductIcon from '@/assets/Product-Icon.svg';
import SellIcon from '@/assets/Sell-Icon.svg';

export const BottomHeaderLayout: React.FC = () => {
  return (
    <Styles.BottomHeaderLayout>
      <Styles.NavContainer>
        <NavItem to='/sell' icon={SellIcon} alt='판매하기'>
          판매하기
        </NavItem>
        <NavItem to='/products' icon={ProductIcon} alt='내물건'>
          내물건
        </NavItem>
        <NavItem to='/chat' icon={ChatIcon} alt='채팅하기'>
          채팅하기
        </NavItem>
      </Styles.NavContainer>
    </Styles.BottomHeaderLayout>
  );
};
