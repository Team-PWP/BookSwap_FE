import { useEffect, useState } from 'react';

import * as Styles from '../styles';
import { ProductItemProps } from '../type';

const ProductItem: React.FC<ProductItemProps> = ({
  ProductImg,
  title,
  price,
  time,
  onClick,
  // jd,
}) => {
  const [remainingTime, setRemainingTime] = useState<string>('');

  const calculateRemainingTime = (ProductTime: string | number | Date) => {
    const startTime = new Date(ProductTime);
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
      return `${diffInMonths}달 ${days}일 전`;
    } else if (diffInDays > 0) {
      return `${diffInDays}일 ${hours}시간 전`;
    } else if (diffInHours > 0) {
      return `${diffInHours}시간 전`;
    } else {
      return `${minutes}분 전`;
    }
  };

  useEffect(() => {
    const newRemainingTime = calculateRemainingTime(time);
    setRemainingTime(newRemainingTime);
  }, [time]);

  const displayTitle = title === 'string' ? '제목없음' : title;
  const formattedPrice = price.toLocaleString();
  formattedPrice.length > 10
    ? `${formattedPrice.substring(0, 10)}...`
    : formattedPrice;

  const handleClick = () => {
    onClick();
  };

  return (
    <>
      <Styles.MainProductItem onClick={handleClick}>
        <Styles.ProductImage src={ProductImg} alt='상품 사진' />
        <Styles.ProductInfoContainer>
          <Styles.ProductInfoTitle>{displayTitle}</Styles.ProductInfoTitle>
          <Styles.ProductInfo>
            <div>{formattedPrice} 원</div>
            <div>{remainingTime}</div>
          </Styles.ProductInfo>
          {/* <Styles.ProductInfo>
            <div>경매 시작 시간</div>
            <div>3:30</div>
          </Styles.ProductInfo> */}
        </Styles.ProductInfoContainer>
      </Styles.MainProductItem>
    </>
  );
};

export default ProductItem;
