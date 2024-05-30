import styled from 'styled-components';

interface ChatProps {
  nickname: string;
  message: string;
}

const ChatBox: React.FC<ChatProps> = ({ nickname, message }) => {
  return (
    <ChatBoxWrapper>
      <NickContainer>{nickname}</NickContainer>
      <MsgContainer>{message}</MsgContainer>
    </ChatBoxWrapper>
  );
};

export default ChatBox;

const ChatBoxWrapper = styled.div``;

const NickContainer = styled.div``;

const MsgContainer = styled.div``;
