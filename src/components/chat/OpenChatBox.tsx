import styled from 'styled-components';

import { useUserInfoStore } from '@/store/useUserInfoStore';

interface ChatProps {
  Nickname: string;
  message: string;
  date: string;
}

const OpenChatBox: React.FC<ChatProps> = ({ Nickname, message, date }) => {
  const { nickname } = useUserInfoStore((state) => state);

  const isSameNickname = () => {
    return Nickname === nickname;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${year}.${month}.${day}|${hours}:${minutes}`;
  };

  return (
    <ChatBoxWrapper>
      <MsgContainer isSame={isSameNickname()}>{message}</MsgContainer>
      <DetailWrapper>
        <NickContainer isSame={isSameNickname()}>{Nickname}</NickContainer>
        <DateContainer>{formatDate(date)}</DateContainer>
      </DetailWrapper>
    </ChatBoxWrapper>
  );
};

export default OpenChatBox;

const ChatBoxWrapper = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: row;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NickContainer = styled.div<{ isSame: boolean }>`
  border-radius: 10px;
  font-size: 0.8rem;
  margin-bottom: 5px;
  align-items: left;
`;

const DateContainer = styled.div`
  border-radius: 10px;
  font-size: 0.6rem;
  align-items: left;
`;

const MsgContainer = styled.div<{ isSame: boolean }>`
  display: inline-block;
  background-color: ${(props) => (props.isSame ? '#fadb14' : '#ffffff')};
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 6px 10px;
  margin-bottom: 10px;
`;
