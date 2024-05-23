import ProductDetail from './components/ProductDetail';
import { GlobalLayout } from '@/styles/GlobalLayout';
import { TitleContainer } from '@/styles/TitleStyle';

const DetailPage = () => {
  return (
    <>
      <GlobalLayout>
        <TitleContainer>상품 상세 페이지</TitleContainer>
        <ProductDetail />
      </GlobalLayout>
    </>
  );
};

export default DetailPage;
