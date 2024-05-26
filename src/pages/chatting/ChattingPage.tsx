import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { chatlog } from '@/apis/chat/chatlog.api';
import ChatHead from '@/components/chat/ChatHead';
import { useRoomInfoStore } from '@/store/useRoomInfoStore';
import { useUserInfoStore } from '@/store/useUserInfoStore';
import { GlobalLayout } from '@/styles/GlobalLayout';
import { Client, IMessage } from '@stomp/stompjs';

const ChattingPage: React.FC = () => {
  interface RouteParams {
    roomid: string;
    [key: string]: string | undefined;
  }

  interface ChatLog {
    message: string;
    userid: number;
    nickname: string;
    createdAt: string;
  }

  const { roomid } = useParams<RouteParams>();
  const setRoomId = useRoomInfoStore((state) => state.setRoomId);
  const userId = useUserInfoStore((state) => state.userId);
  const [chatLog, setChatLog] = useState<ChatLog[]>([]);
  const [page] = useState<number>(0);
  const size = 10;
  const [, setIsConnected] = useState(false);
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<
    { nickname: string; message: string }[]
  >([]);

  useEffect(() => {
    const fetchChatLog = async () => {
      try {
        if (roomid) {
          const response = await chatlog(page, size, parseInt(roomid));
          console.log(roomid);
          console.log('Response:', response);
          if (Array.isArray(response.data as ChatLog[])) {
            setChatLog(response.data as ChatLog[]);
          } else {
            console.error('Error: response.data is not an array');
          }
        } else {
          console.error('Error: roomid is undefined');
        }
      } catch (error) {
        console.error('Error fetching chat rooms:', error);
      }
    };

    fetchChatLog();
  }, [page, size]);

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
    <GlobalLayout>
      <ChattingWrapper>
        <ChatRoomHeader>
          <ChatHead />
        </ChatRoomHeader>
        <ChatRoomMain>
          {chatLog.map((log, index) => (
            <div key={`log-${index}`}>
              <strong>{log.nickname}:</strong> {log.message}
            </div>
          ))}
          {messages.map((msg, index) => (
            <div key={`msg-${index}`}>
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
    </GlobalLayout>
  );
};

export default ChattingPage;

const ChattingWrapper = styled.div``;

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
