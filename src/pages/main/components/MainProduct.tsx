import * as Styles from '../styles';
import ProductItem from './ProductItem';
import { TitleContainer } from '@/styles/TitleStyle';

const MainProduct = () => {
  return (
    <>
      <TitleContainer>오늘의 상품 추천</TitleContainer>
      <Styles.MainProductContainer>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Styles.MainProductContainer>
    </>
  );
};

export default MainProduct;
