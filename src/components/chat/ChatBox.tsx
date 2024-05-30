import styled from 'styled-components';

import { useUserInfoStore } from '@/store/useUserInfoStore';

interface ChatProps {
  Nickname: string;
  message: string;
}

const ChatBox: React.FC<ChatProps> = ({ Nickname, message }) => {
  const { nickname } = useUserInfoStore((state) => state);

  console.log(nickname);

  const isSameNickname = () => {
    return Nickname === nickname;
  };

  return (
    <ChatBoxWrapper>
      <NickContainer isSame={isSameNickname()}>{Nickname}</NickContainer>
      <MsgContainer isSame={isSameNickname()}>{message}</MsgContainer>
    </ChatBoxWrapper>
  );
};

export default ChatBox;

const ChatBoxWrapper = styled.div`
  margin-left: 5px;
`;

const NickContainer = styled.div<{ isSame: boolean }>`
  border-radius: 10px;
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const MsgContainer = styled.div<{ isSame: boolean }>`
  display: inline-block;
  background-color: ${(props) => (props.isSame ? '#fadb14' : '#ffffff')};
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 6px 10px;
  margin-bottom: 10px;
`;
