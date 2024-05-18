import * as Styles from '../styles.ts';
import { NicknameSectionProps } from '@/pages/shop/type.ts';

export const NicknameSection:React.FC<NicknameSectionProps> = ({ nickname }) => {
  return (
    <Styles.InfoContainer>
      <Styles.NicknameItem>{nickname}</Styles.NicknameItem>
      <Styles.NicknameEdit>닉네임 수정</Styles.NicknameEdit>
    </Styles.InfoContainer>
  );
};
