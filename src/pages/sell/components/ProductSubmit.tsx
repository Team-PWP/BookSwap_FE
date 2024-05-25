// ProductSubmit.tsx
import { useNavigate } from 'react-router-dom';

import * as Styles from '../styles';
import { ProductSell } from '@/apis/sell/sell.api';
import { useProductSellStore } from '@/store/useProductSellStore';

const ProductSubmit = () => {
  const navigate = useNavigate();
  const {
    title,
    content,
    buyoutPrice,
    minPrice,
    bidStartAt,
    bidEndAt,
    imageUrl,
  } = useProductSellStore();
  const image = imageUrl[0];
  const handleProductSubmit = async () => {
    try {
      const request = {
        article: {
          title,
          content,
          buyoutPrice,
          minPrice,
          bidStartAt,
          bidEndAt,
        },
        images: image,
      };
      const data = await ProductSell({ ...request, images: [image] });
      console.log('상품 등록 성공', data);
      alert('상품이 성공적으로 등록되었습니다.');
      navigate('/');
    } catch (error) {
      console.error('상품 판매글 등록 실패', error);
    }
  };

  return (
    <Styles.ProductSellSubmitContainer>
      <Styles.ProductSellSubmitButton onClick={handleProductSubmit}>
        상품 등록하기
      </Styles.ProductSellSubmitButton>
    </Styles.ProductSellSubmitContainer>
  );
};

export default ProductSubmit;
