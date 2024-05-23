import { useEffect, useRef, useState } from 'react';

import MainProduct from './components/MainProduct';
import { GlobalLayout } from '@/styles/GlobalLayout';
import { Client } from '@stomp/stompjs';

const MainPage: React.FC = () => {
  const [, setIsConnected] = useState(false);
  const stompClient = useRef<Client | null>(null);

  useEffect(() => {
    const socket = new WebSocket('ws://52.79.101.132:8080/chat');
    stompClient.current = new Client({
      webSocketFactory: () => socket,
      debug: (str) => {
        console.log(str);
      },
      onConnect: () => {
        console.log('Connected');
        setIsConnected(true);
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

    stompClient.current.activate();

    return () => {
      if (stompClient.current) {
        stompClient.current.deactivate();
      }
    };
  }, []);

  return (
    <GlobalLayout>
      <MainProduct />
    </GlobalLayout>
  );
};

export default MainPage;
