import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

interface ComponentProps {
  title: string;
  id: number;
}

const Wish: React.FC<ComponentProps> = ({ title, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <WishWrapper>
      <WishTitle onClick={handleClick}>{title}</WishTitle>
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
  cursor: pointer;
`;

const WishTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
