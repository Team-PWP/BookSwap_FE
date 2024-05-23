import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import ChatBottom from '@/components/chat/ChatBottom';
import ChatHead from '@/components/chat/ChatHead';
import ChatMain from '@/components/chat/ChatMain';
import { Client, IMessage } from '@stomp/stompjs';

const ChattingPage: React.FC = () => {
  interface RouteParams {
    id: string;
    [key: string]: string | undefined;
  }

  const { id } = useParams<RouteParams>();
  const [isConnected, setIsConnected] = useState(false);
  const [, setStompClient] = useState<Client | null>(null);

  useEffect(() => {
    const socket = new WebSocket('ws://52.79.101.132:8080/chat');
    const client = new Client({
      webSocketFactory: () => socket,
      debug: (str) => {
        console.log(str);
      },
      onConnect: () => {
        console.log('Connected');
        setIsConnected(true);

        client.subscribe(`/sub/chat/room/${id}`, (message: IMessage) => {
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
  }, [id]);

  return (
    <ChattingWarpper>
      <ChatHead />
      <ChatMain />
      <ChatBottom />
      <div>
        <h2>WebSocket Status: {isConnected ? 'Connected' : 'Disconnected'}</h2>
      </div>
    </ChattingWarpper>
  );
};

export default ChattingPage;

const ChattingWarpper = styled.div`
  margin-top: 10rem;
`;
