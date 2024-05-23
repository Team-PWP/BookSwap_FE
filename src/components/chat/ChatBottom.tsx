import styled from 'styled-components';

import ChatInput from './ChatInput';

const ChatBottom = () => {
  return (
    <ChatBottomWrapper>
      <ChatInputWrapper>
        <ChatInput />
      </ChatInputWrapper>
    </ChatBottomWrapper>
  );
};

export default ChatBottom;

const ChatBottomWrapper = styled.div``;

const ChatInputWrapper = styled.div``;
