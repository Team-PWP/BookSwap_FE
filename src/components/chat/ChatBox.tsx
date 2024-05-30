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

const MsgContainer = styled.div`
  display: inline-block;
  background-color: #fadb14;
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 5px 10px;
  margin-bottom: 10px;
`;
