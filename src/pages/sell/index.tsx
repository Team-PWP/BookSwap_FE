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
          <Styles.ProductSellImageContainer>
            <Styles.ProductSellImageTitle>
              <Styles.ProductSellImageText>
                상품이미지
              </Styles.ProductSellImageText>
            </Styles.ProductSellImageTitle>
          </Styles.ProductSellImageContainer>
        </Styles.ProductSellContainer>
      </GlobalLayout>
    </>
  );
};

export default SellPage;
