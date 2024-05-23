import styled from 'styled-components';

import ChatRoom from '@/components/chatlist/ChatRoom';

interface ChatRoomData {
  id: number;
  name: string;
  lastMessage: string;
}

const ChatRoomList: ChatRoomData[] = [
  { id: 1, name: 'Chat Room 1', lastMessage: 'Hello there!' },
  { id: 2, name: 'Chat Room 2', lastMessage: 'How are you?' },
];

const ChatlistPage: React.FC = () => {
  return (
    <ChatlistWrapper>
      {ChatRoomList.map((room) => (
        <ChatRoom
          key={room.id}
          id={room.id}
          name={room.name}
          lastMessage={room.lastMessage}
        />
      ))}
    </ChatlistWrapper>
  );
};

export default ChatlistPage;

const ChatlistWrapper = styled.div`
  margin-top: 2rem;
`;
