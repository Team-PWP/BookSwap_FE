import { BottomHeaderLayout } from '@/components/header/Layout/BottomHeaderLayout.tsx';
import { HeaderLayout } from '@/components/header/Layout/HeaderLayout.tsx';
import { Inner } from '@/components/header/Layout/Inner.tsx';
import { Logo } from '@/components/header/Layout/Logo.tsx';
import { SearchLayout } from '@/components/header/Layout/SearchLayout.tsx';
import { TopHeaderLayout } from '@/components/header/Layout/TopHeaderLayout.tsx';
import { HeaderProps } from '@/components/header/type.ts';

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <>
      <HeaderLayout>
        <Inner>
          <Logo />
          <TopHeaderLayout />
          <SearchLayout />
          <BottomHeaderLayout />
        </Inner>
      </HeaderLayout>
      {children}
    </>
  );
};

export default Header;
