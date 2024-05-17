import * as Styles from '../styles';
import kakaoLogo from '@/assets/kakao.svg';

export const EmailSection = () => {
  return (
    <Styles.EmailContainer>
      <Styles.KakaoContainer>
        <Styles.KakaoSymbol src={kakaoLogo} />
        Kakao
      </Styles.KakaoContainer>
      <Styles.EmailItem>user1234@kakao.com</Styles.EmailItem>
    </Styles.EmailContainer>
  );
};
