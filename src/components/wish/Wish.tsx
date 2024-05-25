import styled from 'styled-components';

interface ComponentProps {
  title: string;
}

const Wish: React.FC<ComponentProps> = ({ title }) => {
  return (
    <WishWrapper>
      <WishTitle>{title}</WishTitle>
    </WishWrapper>
  );
};

export default Wish;

const WishWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer; // 마우스 포인터가 손가락 모양으로 변하도록 설정
`;

const WishTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
