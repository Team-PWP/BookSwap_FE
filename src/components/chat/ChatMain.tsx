import styled from 'styled-components';

const ChatMain = () => {
  return (
    <ChatMainWrapper>
      <ChatLogBox>
        <Chat />
      </ChatLogBox>
    </ChatMainWrapper>
  );
};

export default ChatMain;

const ChatMainWrapper = styled.div``;

const ChatLogBox = styled.div``;