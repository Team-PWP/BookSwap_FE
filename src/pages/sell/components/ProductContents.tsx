import * as Styles from '../styles';

const ProductContents = () => {
  return (
    <>
      <Styles.ProductSellContentsContainer>
        <Styles.ProductSellContentsTitle>
          상품 설명
        </Styles.ProductSellContentsTitle>
        <Styles.ProductSellContentsInputContainer>
          <Styles.ProductSellContentsInput placeholder='상품 설명을 입력해주세요' />
          <Styles.ProductSellNameLength>0/2000</Styles.ProductSellNameLength>
        </Styles.ProductSellContentsInputContainer>
      </Styles.ProductSellContentsContainer>
    </>
  );
};

export default ProductContents;
