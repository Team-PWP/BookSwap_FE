import { useNavigate } from 'react-router-dom';

import * as Styles from '../styles.ts';

export const TopHeaderLayout: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Styles.TopHeaderLayout>
      <Styles.MenuContainer>
        <Styles.MenuWrapper
          onClick={() => {
            navigate('/login');
          }}
        >
          <Styles.MenuItem>로그인 / 회원가입</Styles.MenuItem>
        </Styles.MenuWrapper>
        <Styles.MenuWrapper>
          <Styles.MenuItem>내상점</Styles.MenuItem>
        </Styles.MenuWrapper>
      </Styles.MenuContainer>
    </Styles.TopHeaderLayout>
  );
};
