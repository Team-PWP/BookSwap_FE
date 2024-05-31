import styled from 'styled-components';

import { useUserInfoStore } from '@/store/useUserInfoStore';

interface ChatProps {
  Nickname: string;
  message: string;
}

const OpenChatBox: React.FC<ChatProps> = ({ Nickname, message }) => {
  const { nickname } = useUserInfoStore((state) => state);

  const isSameNickname = () => {
    return Nickname === nickname;
  };

  return (
    <ChatBoxWrapper>
      <MsgContainer isSame={isSameNickname()}>{message}</MsgContainer>
      <NickContainer isSame={isSameNickname()}>{Nickname}</NickContainer>
    </ChatBoxWrapper>
  );
};

export default OpenChatBox;

const ChatBoxWrapper = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: row;
`;

const NickContainer = styled.div<{ isSame: boolean }>`
  border-radius: 10px;
  font-size: 1rem;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
`;

const MsgContainer = styled.div<{ isSame: boolean }>`
  display: inline-block;
  background-color: ${(props) => (props.isSame ? '#fadb14' : '#ffffff')};
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 6px 10px;
  margin-bottom: 10px;
`;
