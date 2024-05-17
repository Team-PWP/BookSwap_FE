import { useNavigate } from 'react-router-dom';

import * as Styles from '../styles.ts';
import SwapLogo from '@/assets/Swap-Logo.svg';

export const Logo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Styles.Logo>
      <Styles.TitleLogo
        onClick={() => {
          navigate('/');
        }}
        src={SwapLogo}
        alt='swap-logo'
      />
    </Styles.Logo>
  );
};
