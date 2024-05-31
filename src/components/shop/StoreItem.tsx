import styled from 'styled-components';

interface StoreItemProps {
  articleId: number;
  userNickname: string;
  title: string;
  buyoutPrice: number;
  minPrice: number;
  createdAt: string;
  imageUrl: string[];
}

export const StoreItem: React.FC<StoreItemProps> = ({
  articleId,
  userNickname,
  title,
  buyoutPrice,
  minPrice,
  createdAt,
  imageUrl,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <Wrapper key={articleId}>
      <ImageWrapper>
        <StyledImage src={imageUrl[0]} alt={title} />
      </ImageWrapper>
      <InfoWrapper>
        <h3>{title}</h3>
        <div>{userNickname}</div>
        <div>즉시 구매가격: {buyoutPrice}원</div>
        <div>최소 가격: {minPrice}원</div>
        <div>생성 시간: {formatDate(createdAt)}</div>
      </InfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #fff;
  height: 200px;
`;

const ImageWrapper = styled.div`
  flex: 0 0 100px;
  margin-right: 1rem;
`;

const StyledImage = styled.img`
  width: 200px;
  height: auto;
  object-fit: cover;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
