import { useState, useEffect } from 'react';

import styled from 'styled-components';

import { chatRoomList } from '@/apis/chat/chatroom.api';
import ChatRoom from '@/components/chatlist/ChatRoom';
import { GlobalLayout } from '@/styles/GlobalLayout';

interface ChatRoomData {
  chatRoomId: number;
  articleId: number;
  title: string;
}

const ChatlistPage: React.FC = () => {
  const [chatRooms, setChatRooms] = useState<ChatRoomData[]>([]);
  const [page] = useState<number>(0);
  const size = 10;

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const response = await chatRoomList(page, size);
        if (Array.isArray(response.data as ChatRoomData[])) {
          setChatRooms(response.data as ChatRoomData[]);
        } else {
          console.error('Error: response.data is not an array');
        }
      } catch (error) {
        console.error('Error fetching chat rooms:', error);
      }
    };

    fetchChatRooms();
  }, [page, size]);

  return (
    <GlobalLayout>
      <ChatlistWrapper>
        {chatRooms.map((room) => (
          <ChatRoom
            key={room.chatRoomId}
            id={room.chatRoomId}
            name={room.title}
            lastMessage={`Article ID: ${room.articleId}`}
          />
        ))}
      </ChatlistWrapper>
    </GlobalLayout>
  );
};

export default ChatlistPage;

const ChatlistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
`;
