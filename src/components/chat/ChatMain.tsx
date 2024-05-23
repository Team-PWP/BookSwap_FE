import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import Chat from '@/components/chat/Chat';

interface ChatLog {
  id: number;
  content: string;
}

const ChatMain: React.FC = () => {
  const { chatRoomId } = useParams<{ chatRoomId: string }>();
  const [chatLogs, setChatLogs] = useState<ChatLog[]>([]);

  useEffect(() => {
    const fetchChatLogs = async () => {
      try {
        const response = await fetch(`/api/chatMessage/${chatRoomId}`);
        const data = await response.json();
        setChatLogs(data);
      } catch (error) {
        console.error('Error fetching chat logs:', error);
      }
    };

    if (chatRoomId) {
      fetchChatLogs();
    }
  }, [chatRoomId]);

  return (
    <ChatMainWrapper>
      <ChatLogBox>
        {chatLogs.map((log) => (
          <Chat key={log.id} content={log.content} />
        ))}
      </ChatLogBox>
    </ChatMainWrapper>
  );
};

export default ChatMain;

const ChatMainWrapper = styled.div``;

const ChatLogBox = styled.div``;
