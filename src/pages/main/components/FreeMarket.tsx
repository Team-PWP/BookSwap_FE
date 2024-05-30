import * as Styles from '../styles';
import EmojiImg from '@/assets/Emoji-Button.svg';
import ButtonImg from '@/assets/Send-Button.svg';

const FreeMarket = () => {
  return (
    <>
      <Styles.GlobalFreeMarketContainer>
        <Styles.GlobalFreeMarketTitle>
          <Styles.TitleText>Swap Chat</Styles.TitleText>
        </Styles.GlobalFreeMarketTitle>
        <Styles.GlobalFreeMarketContents></Styles.GlobalFreeMarketContents>
        <Styles.InputContainer>
          <Styles.EmojiButton src={EmojiImg} />
          <Styles.InputItem type='text' />
          <Styles.SendButton src={ButtonImg} />
        </Styles.InputContainer>
      </Styles.GlobalFreeMarketContainer>
      <Styles.FreeMarketEnterContainer>
        <Styles.FreeMarketEnterButton>
          채팅방 입장하기
        </Styles.FreeMarketEnterButton>
      </Styles.FreeMarketEnterContainer>
    </>
  );
};

export default FreeMarket;
