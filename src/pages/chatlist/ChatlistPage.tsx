import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { chatRoomList } from '@/apis/chat/chatroom.api';
import ChatRoom from '@/components/chatlist/ChatRoom';
import { GlobalLayout } from '@/styles/GlobalLayout';
import { ArrowLeftOutlined } from '@ant-design/icons';

interface ChatRoomData {
  chatRoomId: number;
  articleId: number;
  title: string;
}

const ChatlistPage: React.FC = () => {
  const navigate = useNavigate();
  const [chatRooms, setChatRooms] = useState<ChatRoomData[]>([]);
  const [page] = useState<number>(0);
  const size = 10;

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const response = await chatRoomList(page, size);
        if (Array.isArray(response.data as ChatRoomData[])) {
          setChatRooms(response.data as ChatRoomData[]);
          console.log(response.data);
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
      <HeaderWrapper>
        <ButtonWrapper>
          <ArrowLeftOutlined
            onClick={() => {
              navigate('/');
            }}
          />
        </ButtonWrapper>
        채팅목록
      </HeaderWrapper>
      <ChatlistWrapper>
        {chatRooms.map((room) => (
          <ChatRoom
            key={room.chatRoomId}
            id={room.chatRoomId}
            name={room.title}
          />
        ))}
      </ChatlistWrapper>
    </GlobalLayout>
  );
};

export default ChatlistPage;

const ChatlistWrapper = styled.div`
  margin-top: 1rem;
`;

const HeaderWrapper = styled.div`
  font-size: 1.2rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: row;
`;

const ButtonWrapper = styled.div`
  margin-right: 5px;
`;
