import * as Styles from '../styles';

const ProductItem = () => {
  return (
    <>
      <Styles.MainProductItem>
        <Styles.ProductImage>상품 이미지</Styles.ProductImage>
        <Styles.ProductInfoContainer>
          <div>토토로 인형 26년산</div>
          <Styles.ProductInfo>
            <div>26,500원</div>
            <div>1 시간 전</div>
          </Styles.ProductInfo>
          {/* <Styles.ProductInfo>
            <div>경매 시작 시간</div>
            <div>3:30</div>
          </Styles.ProductInfo> */}
        </Styles.ProductInfoContainer>
      </Styles.MainProductItem>
    </>
  );
};

export default ProductItem;
