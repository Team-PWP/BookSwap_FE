import { KAKAO_AUTH_URL } from '@/apis/OAuth';
import Logo from '@/assets/kakao.svg';
import styled from '@emotion/styled';

const LoginPage = () => {
  const HandlerKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
    alert('카카오 로그인');
  };

  return (
    <>
      <PCLayout>
        <ChattingLayout></ChattingLayout>
        <LoginLayout>
          <PageName>로그인</PageName>
          <LoginSection>
            <h1>Swap으로 중고거래 시작하기</h1>
            <div>간편하게 가입하고 상품을 확인하세요</div>
            <ButtonSection>
              <KaKaoLoginButton onClick={HandlerKakaoLogin}>
                <KaKaoLoginLogo src={Logo} alt='kakao-symbol' />
                <LoginText>카카오 로그인</LoginText>
              </KaKaoLoginButton>
            </ButtonSection>
          </LoginSection>
        </LoginLayout>
        <BannerLayout></BannerLayout>
      </PCLayout>
    </>
  );
};

export default LoginPage;

const PCLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
`;

const ChattingLayout = styled.div`
  display: flex;
  width: 18.75rem;
  padding: 6.25rem 1.25rem 25rem 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
`;

const BannerLayout = styled.div`
  width: 18.75rem;
  align-self: stretch;
`;

const PageName = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.9375rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;

const LoginLayout = styled.div`
  display: flex;
  /* text-align: start; */
  flex-direction: column;
  /* justify-content: center; */
  align-items: start;
  /* height: 70vh; */
`;

const LoginSection = styled.div`
  text-align: center;
  background-color: #f7f7f7;
  padding: 5rem 5rem;
  border-radius: 0.75rem;
`;
const ButtonSection = styled.div`
  display: flex;

  text-align: center;
  flex-direction: center;
  margin-top: 2rem;
  justify-content: center;
`;

const KaKaoLoginButton = styled.div`
  display: flex;
  text-align: center;
  background-color: #fee500;
  width: 15rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  align-items: center;
`;

const KaKaoLoginLogo = styled.img`
  width: 1.5rem;
  text-align: center;
  flex-direction: center;

  margin-right: 2rem;
  margin-left: 1rem;
`;

const LoginText = styled.div`
  display: flex;
  text-align: center;
  flex-direction: center;
  /* margin-top: 0.5rem; */
  margin-left: 1rem;
`;
