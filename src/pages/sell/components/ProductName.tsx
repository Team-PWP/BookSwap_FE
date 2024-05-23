import * as Styles from '../styles';

const ProductName = () => {
  return (
    <>
      <Styles.ProductSellNameContainer>
        <Styles.ProductSellNameTitle>상품명</Styles.ProductSellNameTitle>
        <Styles.ProductSellNameInput placeholder='상품명을 입력해주세요' />
        <Styles.ProductSellNameLength>(0/50)</Styles.ProductSellNameLength>
      </Styles.ProductSellNameContainer>
    </>
  );
};

export default ProductName;
