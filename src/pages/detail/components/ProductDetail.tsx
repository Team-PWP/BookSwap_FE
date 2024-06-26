import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as Styles from '../styles';
import ProductBid from './ProductBid';
import ProductDelete from './ProductDelete';
import ProductInfo from './ProductInfo';
import { DetailCheck, getProductSellerId } from '@/apis/detail/detail.api';
import { useBuyoutStore } from '@/store/useBuyoutStore';
import { useProductSellStore } from '@/store/useProductSellStore';

const ProductDetail = () => {
  const { articleId } = useParams() as { articleId: string };
  const [productTitle, setProductTitle] = useState('');
  const [productContent, setProductContent] = useState('');
  const [productBuyoutPrice, setProductBuyoutPrice] = useState(0);
  const [ProductImageUrls, setProductImageUrls] = useState<File[]>([]);
  const [remainingTime, setRemainingTime] = useState('');
  const [formattedStartDate, setFormattedStartDate] = useState('');
  const [productMinPrice, setProductMinPrice] = useState<number>(0);
  const [bidTime, setBidTime] = useState('');
  // const [productStartDay, setProductStartDay] = useState('');
  const [productEndDay, setProductEndDay] = useState('');
  const setSellerId = useProductSellStore((state) => state.setSellerId);

  const setBuyoutPrice = useBuyoutStore((state) => state.setBuyoutPrice);
  const id = parseInt(articleId);
  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const data = await DetailCheck(id);
        setProductTitle(data.title);
        setProductContent(data.content);
        setProductBuyoutPrice(data.buyoutPrice);
        setProductImageUrls(data.imageUrls);
        setProductMinPrice(data.minPrice);
        // setProductStartDay(data.bidStartAt);
        setProductEndDay(data.bidEndAt);

        calculateRemainingTime(data.createdAt);
        setFormattedStartDate(formatDate(data.createdAt));
        setBuyoutPrice(data.buyoutPrice);
        console.log('buyoutPrice', data.buyoutPrice);
      } catch (error) {
        console.error('상품 정보 받아오기 실패 :', error);
      }
    };
    fetchProductInfo();
  }, [id, setBuyoutPrice]);

  useEffect(() => {
    const fetchProductSeller = async () => {
      try {
        const response = await getProductSellerId(id);
        setSellerId(response.userId);
      } catch (error) {
        console.error('상품 정보 받아오기 실패 :', error);
      }
    };
    fetchProductSeller();
  }, [id, setSellerId]);
  /**
   * 날짜 추출 후 포맷 변경
   * 게시물 작성 날짜 출력
   */
  const formatDate = (datetime: string) => {
    const datePart = datetime.split('T')[0];
    const [year, month, day] = datePart.split('-');
    return `${year}년 ${month}월 ${day}일`;
  };

  /**
   * 1. 시간 추출 후 포맷 변경
   * 2. 게시물 최초 작성 시간 및 날짜와 현재 시간 및 날짜 비교
   * 2 에서 비교된 기간 만큼 출력
   */

  const calculateRemainingTime = (createdAt: string | number | Date) => {
    const startTime = new Date(createdAt);
    const now = new Date();

    const diffInMillis = now.getTime() - startTime.getTime();
    const diffInMinutes = Math.floor(diffInMillis / 60000);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);

    const minutes = diffInMinutes % 60;
    const hours = diffInHours % 24;
    const days = diffInDays % 30;

    if (diffInMonths > 0) {
      setRemainingTime(`${diffInMonths}달 ${days}일 전`);
    } else if (diffInDays > 0) {
      setRemainingTime(`${diffInDays}일 ${hours}시간 전`);
    } else if (diffInHours > 0) {
      setRemainingTime(`${diffInHours}시간 전`);
    } else {
      setRemainingTime(`${minutes}분 전`);
    }
  };
  useEffect(() => {
    if (!productEndDay) return;

    const updateRemainingTime = () => {
      const endTime = new Date(productEndDay);
      const now = new Date();

      const diffInMillis = endTime.getTime() - now.getTime();
      const diffInMinutes = Math.floor(diffInMillis / 60000);
      const diffInHours = Math.floor(diffInMinutes / 60);
      const diffInDays = Math.floor(diffInHours / 24);

      const minutes = diffInMinutes % 60;
      const hours = diffInHours % 24;
      const days = diffInDays % 30;

      if (days < 0 && hours < 0 && minutes < 0) {
        setBidTime('경매 종료');
        return;
      }
      setBidTime(
        `${days.toString().padStart(2, '0')}일 ${hours.toString().padStart(2, '0')}시간 ${minutes.toString().padStart(2, '0')}분 남음`
      );
    };

    updateRemainingTime();
    const intervalId = setInterval(updateRemainingTime, 60000);

    return () => clearInterval(intervalId);
  }, [productEndDay]);

  return (
    <>
      <Styles.ProductDetailContainer>
        <ProductInfo
          Title={productTitle}
          BuyoutPrice={productBuyoutPrice.toLocaleString()}
          Img={ProductImageUrls}
          Time={remainingTime}
          date={formattedStartDate}
          // articleId={id}
        />
        <ProductBid
          minPrice={productMinPrice}
          bidTime={bidTime}
          // articleId={id}
        />
        <Styles.ProductDetailContentsContainer>
          <Styles.ProductDetailContentsTitle>
            상품 정보
          </Styles.ProductDetailContentsTitle>
          <Styles.ProductDetailContentsItem>
            {productContent}
          </Styles.ProductDetailContentsItem>
        </Styles.ProductDetailContentsContainer>
        <ProductDelete />
      </Styles.ProductDetailContainer>
    </>
  );
};

export default ProductDetail;
