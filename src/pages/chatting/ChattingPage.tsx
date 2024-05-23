import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { useRoomInfoStore } from '@/store/useRoomInfoStore';
import { Client, IMessage } from '@stomp/stompjs';

const ChattingPage: React.FC = () => {
  interface RouteParams {
    roomid: string;
    [key: string]: string | undefined;
  }

  const { roomid } = useParams<RouteParams>();
  const setRoomId = useRoomInfoStore((state) => state.setRoomId);
  const [, setIsConnected] = useState(false);
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [message, setMessage] = useState('');

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

        client.subscribe(`/sub/chat/room/${roomid}`, (message: IMessage) => {
          console.log('Received message:', message.body);
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
      stompClient.publish({
        destination: `/pub/chat/room/${roomid}`,
        body: JSON.stringify({ message }),
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
        <ChatMain />
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

const ChatRoomMain = styled.div``;

const ChatRoomInput = styled.div``;

const ChatHead = () => <div>Chat Head</div>;

const ChatMain = () => <div>Chat Main</div>;
