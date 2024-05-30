import { useState } from 'react';

// import { Button, Input } from 'antd';
import styled from 'styled-components';

import { useRoomInfoStore } from '@/store/useRoomInfoStore';
import { useUserInfoStore } from '@/store/useUserInfoStore';

type ChatInputProps = {
  stompClient: any;
};

const ChatInput: React.FC<ChatInputProps> = ({ stompClient }) => {
  const [message, setMessage] = useState('');
  const roomId = useRoomInfoStore((state) => state.roomId);
  const userId = useUserInfoStore((state) => state.userId);

  const sendMessage = () => {
    if (!stompClient) return;
    if (!message.trim()) return;

    const chatMessageRequest = {
      chatRoomId: roomId,
      userId: userId,
      message: message.trim(),
    };

    stompClient.send(
      '/app/chat.sendMessage',
      {},
      JSON.stringify(chatMessageRequest)
    );
    setMessage('');
  };

  return (
    <InputContainer>
      <input
        type='text'
        placeholder='Enter message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage} disabled={!message.trim()}>
        Send
      </button>
    </InputContainer>
  );
};

export default ChatInput;

const InputContainer = styled.div`
  width: 80%;
`;
