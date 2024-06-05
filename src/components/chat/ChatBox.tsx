import { useUserInfoStore } from '@/store/useUserInfoStore';
import styled from '@emotion/styled';

interface ChatProps {
  Nickname: string;
  message: string;
  date: string;
}

const ChatBox: React.FC<ChatProps> = ({ Nickname, message, date }) => {
  const { nickname } = useUserInfoStore((state) => state);

  const isSameNickname = () => {
    return Nickname === nickname;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <ChatBoxWrapper>
      <NickContainer isSame={isSameNickname()}>{Nickname}</NickContainer>
      <DetailWrapper>
        <MsgContainer isSame={isSameNickname()}>{message}</MsgContainer>
        <TimeWrapper>
          <DateContainer>{formatDate(date)}</DateContainer>
          <DateContainer>{formatTime(date)}</DateContainer>
        </TimeWrapper>
      </DetailWrapper>
    </ChatBoxWrapper>
  );
};

export default ChatBox;

const ChatBoxWrapper = styled.div`
  margin-left: 5px;
`;

const NickContainer = styled.div<{ isSame: boolean }>`
  border-radius: 10px;
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const MsgContainer = styled.div<{ isSame: boolean }>`
  display: inline-block;
  background-color: ${(props) => (props.isSame ? '#fadb14' : '#ffffff')};
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 6px 10px;
  margin-bottom: 10px;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  margin-left: 3px;
`;

const DateContainer = styled.div`
  border-radius: 10px;
  font-size: 0.8rem;
  align-items: left;
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3px;
`;
