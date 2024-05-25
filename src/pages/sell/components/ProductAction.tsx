import { useState } from 'react';

import * as Styles from '../styles';
import { useProductSellStore } from '@/store/useProductSellStore';

const ProductAction = () => {
  const [actionStartDate, setAuctionStartDate] = useState('');
  const [actionEndDate, setAuctionEndDate] = useState('');

  const { bidStartAt, setBidStartAt, bidEndAt, setBidEndAt } =
    useProductSellStore();

  const handleStartDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputStartDate = event.target.value;
    setAuctionStartDate(inputStartDate);
    setBidStartAt(inputStartDate + ':00.000Z');
    console.log('시작 날짜 :', inputStartDate);
  };

  const handleEndDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const inputEndDate = event.target.value;
    const inputEndDate = event.target.value;
    setAuctionEndDate(inputEndDate);
    setBidEndAt(inputEndDate + ':00.000Z');
    console.log('종료 시간 :', inputEndDate);
  };

  console.log(bidStartAt, bidEndAt);
  // setBidEndAt(EndAt);
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
          value={actionStartDate}
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
          value={actionEndDate}
          onChange={handleEndDate}
        />
      </Styles.ProductSellPriceTitleContainer>
    </>
  );
};

export default ProductAction;
