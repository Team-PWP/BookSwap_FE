import * as Styles from '../styles';
import { useProductSellStore } from '@/store/useProductSellStore';

const ProductAction = () => {
  const { bidStartAt, setBidStartAt, bidEndAt, setBidEndAt } =
    useProductSellStore();

  const handleStartDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputStartDate = event.target.value;
    const startAt = inputStartDate + ':00.000Z';
    setBidStartAt(startAt);
    console.log('시작 날짜 :', startAt);
  };

  const handleEndDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputEndDate = event.target.value;
    const endAt = inputEndDate + ':00.000Z';
    setBidEndAt(endAt);
    console.log('종료 날짜 :', endAt);
  };

  return (
    <>
      <Styles.ProductSellPriceContainer>
        시간 설정
      </Styles.ProductSellPriceContainer>
      <Styles.ProductSellPriceTitleContainer>
        <Styles.ProductSellPriceTitle>시작 시간</Styles.ProductSellPriceTitle>

        <Styles.ProductSellPriceInputContainer
          placeholder='시작 날짜를 입력해주세요.'
          type='datetime-local'
          value={bidStartAt}
          onChange={handleStartDate}
        />
      </Styles.ProductSellPriceTitleContainer>
      <Styles.ProductSellPriceTitleContainer>
        <Styles.ProductSellPriceTitle>
          경매 종료 시간
        </Styles.ProductSellPriceTitle>
        <Styles.ProductSellPriceInputContainer
          placeholder='종료 날짜를 입력해주세요.'
          type='datetime-local'
          value={bidEndAt}
          onChange={handleEndDate}
        />
      </Styles.ProductSellPriceTitleContainer>
    </>
  );
};

export default ProductAction;
