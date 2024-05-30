import { useNavigate } from 'react-router-dom';

import * as Styles from '../styles.ts';

export const TopHeaderLayout: React.FC = () => {
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  return (
    <Styles.TopHeaderLayout>
      <Styles.MenuContainer>
        <Styles.MenuWrapper
          onClick={() => {
            if (accessToken) {
              handleLogout();
            } else {
              navigate('/login');
            }
          }}
        >
          <Styles.MenuItem>
            {accessToken ? '로그아웃' : '로그인 / 회원가입'}
          </Styles.MenuItem>
        </Styles.MenuWrapper>
        <Styles.MenuWrapper>
          <Styles.MenuItem
            onClick={() => {
              navigate('/shop');
            }}
          >
            내상점
          </Styles.MenuItem>
        </Styles.MenuWrapper>
      </Styles.MenuContainer>
    </Styles.TopHeaderLayout>
  );
};
