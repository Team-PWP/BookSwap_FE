import styled from 'styled-components';

interface ChatProps {
  content: string;
}

const Chat: React.FC<ChatProps> = ({ content }) => {
  return <ChatBox>{content}</ChatBox>;
};

export default Chat;

const ChatBox = styled.div``;
