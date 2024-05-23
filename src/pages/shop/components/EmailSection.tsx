import * as Styles from '../styles';
import kakaoLogo from '@/assets/kakao.svg';
import { EmailSectionProps } from '@/pages/shop/type';

export const EmailSection: React.FC<EmailSectionProps> = ({
  email,
}: EmailSectionProps) => {
  return (
    <Styles.EmailContainer>
      <Styles.KakaoContainer>
        <Styles.KakaoSymbol src={kakaoLogo} />
        Kakao
      </Styles.KakaoContainer>
      <Styles.EmailItem>{email}</Styles.EmailItem>
    </Styles.EmailContainer>
  );
};
