import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { ArrowLeftOutlined } from '@ant-design/icons';

const ChatHead = () => {
  const navigate = useNavigate();
  return (
    <ChatHeadWrapper>
      <HeaderWrapper>
        <ButtonWrapper>
          <ArrowLeftOutlined
            onClick={() => {
              navigate('/chatlist');
            }}
          />
        </ButtonWrapper>
        채팅방
      </HeaderWrapper>
    </ChatHeadWrapper>
  );
};

export default ChatHead;

const ChatHeadWrapper = styled.div`
  height: auto;
  background-color: #4c89ff;
  font-color: white;
  text-align: center;
  padding: 0.8rem;
`;
const ButtonWrapper = styled.div`
  margin-right: 5px;
  text-align: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;
