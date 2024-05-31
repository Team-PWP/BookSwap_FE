import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as Styles from '../styles';
import { ProductBidProps } from '../type';
import { getArticleBidlist } from '@/apis/bid/bid.api';
import { Bid } from '@/apis/bid/bid.request';
import { usePageStore } from '@/store/usePageStore';

const ProductBid: React.FC<ProductBidProps> = ({ minPrice, bidTime }) => {
  const { page } = usePageStore();
  const [bids, setBids] = useState<Bid[]>([]);
  const [currentBid, setCurrentBid] = useState<number>(0);
  const { articleId } = useParams() as { articleId: string };

  console.log(bids);

  const fetchProducts = useCallback(async () => {
    const parameters = {
      page: page,
      size: 9,
    };

    try {
      const bidlist = await getArticleBidlist(parameters, parseInt(articleId));
      setBids(bidlist.data);
      setCurrentBid(bidlist.data[bidlist.data.length - 1].price);
    } catch (error) {
      console.error('물건을 불러올 수 없음 !', error);
    }
  }, [page, articleId]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

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
              {currentBid.toLocaleString()}원
            </Styles.BidTableCell>
          </Styles.BidTableRow>
        </Styles.BidTable>
      </Styles.ProductActionBidContainer>
    </>
  );
};

export default ProductBid;
