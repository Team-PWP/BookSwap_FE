import * as Styles from '../styles';
import AddImg from '@/assets/Add-Image.svg';

const ProductImage = () => {
  return (
    <>
      <Styles.ProductSellImageContainer>
        <Styles.ProductSellImageTitle>
          <Styles.ProductSellImageText>상품이미지</Styles.ProductSellImageText>
          <Styles.ProductImgNumber>(0/5)</Styles.ProductImgNumber>
          <Styles.ProductSellAddImage>
            <Styles.ProductSellImage src={AddImg} />
            이미지 등록
          </Styles.ProductSellAddImage>
        </Styles.ProductSellImageTitle>
      </Styles.ProductSellImageContainer>
    </>
  );
};

export default ProductImage;
