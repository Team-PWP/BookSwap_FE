import { useNavigate } from 'react-router-dom';

import * as Styles from '../styles.ts';
import { NavItemProps } from '@/components/header/type.ts';

export const NavItem: React.FC<NavItemProps> = ({
  to,
  icon,
  alt,
  children,
}) => {
  const navigate = useNavigate();
  return (
    <Styles.NavItem onClick={() => navigate(to)}>
      <Styles.NavIcons src={icon} alt={alt} />
      {children}
    </Styles.NavItem>
  );
};
