import * as Styles from '../styles';

const ProductPrice = () => {
  return (
    <>
      <Styles.ProductSellPriceContainer>
        상품 가격
      </Styles.ProductSellPriceContainer>
      <Styles.ProductSellPriceTitleContainer>
        <Styles.ProductSellPriceTitle>가격</Styles.ProductSellPriceTitle>
        <Styles.ProductSellPriceInputContainer placeholder='가격을 입력해주세요.' />
      </Styles.ProductSellPriceTitleContainer>
    </>
  );
};

export default ProductPrice;
