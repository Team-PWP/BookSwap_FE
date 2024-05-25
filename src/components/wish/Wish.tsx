import styled from 'styled-components';

interface ComponentProps {
  title: string;
}

const Wish: React.FC<ComponentProps> = ({ title }) => {
  return <WishWrapper>{title}</WishWrapper>;
};

export default Wish;

const WishWrapper = styled.div``;
