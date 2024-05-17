import * as Styles from './styles';
import { KAKAO_AUTH_URL } from '@/apis/OAuth';
import Logo from '@/assets/kakao.svg';

const LoginPage = () => {
  const HandlerKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <Styles.PCLayout>
        <Styles.ChattingLayout></Styles.ChattingLayout>
        <Styles.LoginLayout>
          <Styles.PageName>로그인</Styles.PageName>
          <Styles.LoginSection>
            <h1>Swap으로 중고거래 시작하기</h1>
            <div>간편하게 가입하고 상품을 확인하세요</div>
            <Styles.ButtonSection>
              <Styles.KaKaoLoginButton onClick={HandlerKakaoLogin}>
                <Styles.KaKaoLoginLogo src={Logo} alt='kakao-symbol' />
                <Styles.LoginText>카카오 로그인</Styles.LoginText>
              </Styles.KaKaoLoginButton>
            </Styles.ButtonSection>
          </Styles.LoginSection>
        </Styles.LoginLayout>
        <Styles.BannerLayout></Styles.BannerLayout>
      </Styles.PCLayout>
    </>
  );
};

export default LoginPage;
