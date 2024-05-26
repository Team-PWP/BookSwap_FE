import { useState, useEffect } from 'react';

import * as Styles from '../styles';
import { ProductBidProps } from '../type';
import { useAuctionStore } from '@/store/useAuctionStore';

const ProductBid: React.FC<ProductBidProps> = ({
  minPrice,
  bidPrice,
  bidTime,
}) => {
  const { newBidPrice } = useAuctionStore();
  const [bids, setBids] = useState<string[]>([]);
  const [currentBid, setCurrentBid] = useState<number>(0);

  useEffect(() => {
    if (newBidPrice > 0) {
      setCurrentBid(newBidPrice);
    }
  }, [newBidPrice]);

  const handleBid = () => {
    const newBid = `입찰가: ${currentBid}원`;
    setBids([...bids, newBid]);
    setCurrentBid(currentBid + 1);
  };

  return (
    <>
      <Styles.ProductActionBidContainer>
        <Styles.BidTable>
          <Styles.BidTableRow>
            <Styles.BidTableCell>남은 경매 시간</Styles.BidTableCell>
            <Styles.BidTableCell>{bidTime}</Styles.BidTableCell>
          </Styles.BidTableRow>
          <Styles.BidTableRow>
            <Styles.BidTableCell>최소 입찰 가격</Styles.BidTableCell>
            <Styles.BidTableCell>
              {minPrice.toLocaleString()}원
            </Styles.BidTableCell>
          </Styles.BidTableRow>
          <Styles.BidTableRow>
            <Styles.BidTableCell>최신 입찰 가격</Styles.BidTableCell>
            <Styles.BidTableCell>
              {bidPrice.toLocaleString()}원
            </Styles.BidTableCell>
          </Styles.BidTableRow>
        </Styles.BidTable>
        {/* <Styles.BidButton onClick={handleBid}>입찰하기</Styles.BidButton> */}
        <Styles.BidStatusList>
          {bids.map((bid, index) => (
            <Styles.BidStatusItem key={index}>{bid}</Styles.BidStatusItem>
          ))}
        </Styles.BidStatusList>
      </Styles.ProductActionBidContainer>
    </>
  );
};

export default ProductBid;
