// import { useEffect } from 'react';
import * as Styles from '../styles';
import ProductAction from './ProductAction';
import ProductContents from './ProductContents';
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductSubmit from './ProductSubmit';

// import { ProductSell } from '@/apis/sell/sell.api';

const ProductSellInfo = () => {
  return (
    <>
      <Styles.ProductSellContainer>
        <Styles.ProductSellInfoTitle>상품 정보</Styles.ProductSellInfoTitle>
        <ProductImage />
      </Styles.ProductSellContainer>
      <ProductName />
      <ProductContents />
      <ProductAction />
      <ProductPrice />
      <ProductSubmit />
    </>
  );
};

export default ProductSellInfo;
