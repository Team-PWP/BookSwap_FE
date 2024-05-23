import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { useRoomInfoStore } from '@/store/useRoomInfoStore';
import { useUserInfoStore } from '@/store/useUserInfoStore';
import { Client, IMessage } from '@stomp/stompjs';

const ChattingPage: React.FC = () => {
  interface RouteParams {
    roomid: string;
    [key: string]: string | undefined;
  }

  const { roomid } = useParams<RouteParams>();
  const setRoomId = useRoomInfoStore((state) => state.setRoomId);
  let userId = useUserInfoStore((state) => state.userId);
  userId = 2; // 임시로 userId 설정

  const [, setIsConnected] = useState(false);
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<
    { nickname: string; message: string }[]
  >([]);

  useEffect(() => {
    if (roomid) {
      const roomIdNumber = parseInt(roomid);
      setRoomId(roomIdNumber);
    }
  }, [roomid, setRoomId]);

  useEffect(() => {
    const socket = new WebSocket('ws://52.79.101.132:8080/chat');
    const client = new Client({
      webSocketFactory: () => socket,
      debug: (str) => {
        console.log(str);
      },
      onConnect: () => {
        console.log('Connected');
        console.log('roomId: ', roomid);
        setIsConnected(true);

        client.subscribe(`/topic/chat/${roomid}`, (message: IMessage) => {
          const receivedMessage = JSON.parse(message.body);
          console.log('Received message:', receivedMessage);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              nickname: receivedMessage.nickname,
              message: receivedMessage.message,
            },
          ]);
        });
      },
      onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
      },
      onDisconnect: () => {
        console.log('Disconnected');
        setIsConnected(false);
      },
    });

    client.activate();

    setStompClient(client);

    return () => {
      if (client) {
        client.deactivate();
      }
    };
  }, [roomid]);

  const handleSendMessage = () => {
    if (stompClient && stompClient.connected) {
      const chatMessageRequest = {
        chatRoomId: roomid,
        userId: userId,
        message: message,
      };
      stompClient.publish({
        destination: `/app/chat.sendMessage`,
        body: JSON.stringify(chatMessageRequest),
      });
      setMessage('');
    }
  };

  return (
    <ChattingWrapper>
      <ChatRoomHeader>
        <ChatHead />
      </ChatRoomHeader>
      <ChatRoomMain>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.nickname}:</strong> {msg.message}
          </div>
        ))}
      </ChatRoomMain>
      <ChatRoomInput>
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <button onClick={handleSendMessage}>Send</button>
      </ChatRoomInput>
    </ChattingWrapper>
  );
};

export default ChattingPage;

const ChattingWrapper = styled.div`
  margin-top: 10rem;
`;

const ChatRoomHeader = styled.div``;

const ChatRoomMain = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;

const ChatRoomInput = styled.div`
  display: flex;
  input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
  }
  button {
    padding: 10px;
    font-size: 16px;
  }
`;

const ChatHead = () => <div>Chat Head</div>;
