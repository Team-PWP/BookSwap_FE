import { useState } from 'react';

const ChatInput = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    const roomId = 'YOUR_ROOM_ID';

    const chatMessageRequest = {
      chatRoomId: roomId,
      userId: 'YOUR_USER_ID',
      message: message.trim(),
    };

    stompClient.send(
      '/app/chat.sendMessage',
      {},
      JSON.stringify(chatMessageRequest)
    );
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
