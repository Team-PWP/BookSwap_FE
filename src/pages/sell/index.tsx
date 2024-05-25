import ProductSellInfo from './components/ProductSellInfo';
import { GlobalLayout } from '@/styles/GlobalLayout';
import { TitleContainer } from '@/styles/TitleStyle';

const SellPage = () => {
  return (
    <>
      <GlobalLayout>
        <TitleContainer>상품 판매하기</TitleContainer>
        <ProductSellInfo />
      </GlobalLayout>
    </>
  );
};

export default SellPage;
