import Logo from '@assets/kakao.svg';

import styled from '@emotion/styled';

const LoginPage = () => {
  // const GoogleLoginUrl = `
  //   https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_AUTH_CLIENT_ID}&redirect_uri=${GOOGLE_AUTH_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email
  // `;
  return (
    <>
      <LoginLayout>
        <LoginSection>
          <h1>Swap으로 중고거래 시작하기</h1>
          <div>간편하게 가입하고 상품을 확인하세요</div>
          <KaKaoLoginButton>
            <KaKaoLoginLogo src={Logo} alt='kakao-symbol' />
            <div>카카오 로그인</div>
          </KaKaoLoginButton>
        </LoginSection>
      </LoginLayout>
    </>
  );
};

export default LoginPage;

const LoginLayout = styled.div`
  text-align: center;
  flex-direction: center;
`;

const LoginSection = styled.section`
  text-align: center;
  background-color: #f7f7f7;
  padding: 5rem 5rem;
`;

const KaKaoLoginButton = styled.div`
  display: flex;
  text-align: start;
  flex-direction: center;
  margin-top: 1rem;
  background-color: #fee500;
  padding: 1rem 0.5rem;
  /* width: 20rem; */
  /* height: 5.625rem; */
  border-radius: 0.75rem;
`;

const KaKaoLoginLogo = styled.img`
  width: 2rem;
  height: 1.5rem;
  margin-right: 4rem;
  margin-left: 0.5rem;
`;
