import { useNavigate, useParams } from 'react-router-dom';

import * as Styles from '../styles';
import { DetailDelete } from '@/apis/detail/detail.api';

const ProductDelete = () => {
  const { articleId } = useParams() as { articleId: string };
  const navigate = useNavigate();

  const id = parseInt(articleId);

  const handlerDelete = async () => {
    try {
      await DetailDelete(id);
      alert('상품이 성공적으로 삭제되었습니다.');
      navigate('/');
    } catch (error) {
      console.error('상품 삭제 실패', error);
      alert('해당 상품을 삭제할 권한이 없습니다.');
    }
  };

  return (
    <>
      <Styles.ProductDetailDeleteContainer>
        <Styles.ProductUserInfoButton color='#FF6F61' onClick={handlerDelete}>
          삭제하기
        </Styles.ProductUserInfoButton>
      </Styles.ProductDetailDeleteContainer>
    </>
  );
};

export default ProductDelete;
