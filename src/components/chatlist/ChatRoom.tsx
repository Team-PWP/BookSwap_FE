// eslint-disable-next-line import/default
import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

interface ChatRoomProps {
  id: number;
  name: string;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ id, name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/chatroom/${id}`);
  };

  return (
    <ChatRoomWrapper onClick={handleClick}>
      <ChatTitle>{name}</ChatTitle>
    </ChatRoomWrapper>
  );
};

export default ChatRoom;

const ChatRoomWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const ChatTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;
