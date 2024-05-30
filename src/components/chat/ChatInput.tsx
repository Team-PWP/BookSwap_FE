import { useState } from 'react';

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
      <Input
        type='text'
        placeholder='Enter message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={sendMessage} disabled={!message.trim()}>
        Send
      </Button>
    </InputContainer>
  );
};

export default ChatInput;

const InputContainer = styled.div`
  width: 80%;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #6495ed;
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #4169e1;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
