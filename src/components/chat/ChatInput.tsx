import { useState } from 'react';

import { useRoomInfoStore } from '@/store/useRoomInfoStore';
import { useUserInfoStore } from '@/store/useUserInfoStore';

const ChatInput = ({ stompClient }: { stompClient: any }) => {
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
    <div>
      <input
        type='text'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatInput;
