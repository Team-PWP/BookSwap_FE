import ProductContents from './components/ProductContents';
import ProductImage from './components/ProductImage';
import ProductName from './components/ProductName';
import ProductPrice from './components/ProductPrice';
import ProductSubmit from './components/ProductSubmit';
import * as Styles from './styles';
import { GlobalLayout } from '@/styles/GlobalLayout';
import { TitleContainer } from '@/styles/TitleStyle';

const SellPage = () => {
  return (
    <>
      <GlobalLayout>
        <TitleContainer>상품 판매하기</TitleContainer>
        <Styles.ProductSellContainer>
          <Styles.ProductSellInfoTitle>상품 정보</Styles.ProductSellInfoTitle>
          <ProductImage />
        </Styles.ProductSellContainer>
        <ProductName />
        <ProductContents />
        <ProductPrice />
        <ProductSubmit />
      </GlobalLayout>
    </>
  );
};

export default SellPage;
