import * as Styles from '../styles';
import AllProduct from './AllProduct';
import { TitleContainer } from '@/styles/TitleStyle';

const MainProduct = () => {
  return (
    <>
      <TitleContainer>오늘의 상품 추천</TitleContainer>
      <Styles.MainProductContainer>
        <AllProduct />
      </Styles.MainProductContainer>
    </>
  );
};

export default MainProduct;
