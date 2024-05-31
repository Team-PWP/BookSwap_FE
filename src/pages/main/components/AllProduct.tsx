import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProductTypes } from '../type';
import ProductItem from './ProductItem';
import { getAllProducts } from '@/apis/product/product.api';
import { myInfo } from '@/apis/shop/shop.api';
import { usePageStore } from '@/store/usePageStore';
import { useUserInfoStore } from '@/store/useUserInfoStore';

// import { useNicknameStore } from '@/store/useUserInfoStore';

const AllProduct: React.FC = () => {
  const { page } = usePageStore();
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const { setNickname } = useUserInfoStore();
  const navigate = useNavigate();

  const fetchNickname = useCallback(async () => {
    try {
      const data = await myInfo();
      setNickname(data.nickname);
    } catch (error) {
      console.error('유저 정보 받아오기 실패 :', error);
    }
  }, [setNickname]);

  const fetchProducts = useCallback(async () => {
    const parameters = {
      page: page,
      size: 9,
    };
    try {
      const products = await getAllProducts(parameters);
      setProducts(products.data);
    } catch (error) {
      console.error('물건을 불러올 수 없음 !', error);
    }
  }, [page]);

  useEffect(() => {
    fetchProducts();
    fetchNickname();
  }, [fetchProducts, fetchNickname]);

  const navigateToProductDetail = (articleId: number) => {
    navigate(`/detail/${articleId}`); // ProductDetail 페이지로 이동합니다.
  };

  return (
    <>
      {products.map((product) => {
        const productImage =
          product.imageUrl && product.imageUrl.length > 0
            ? product.imageUrl[0]
            : 'defaultImageUrl';

        return (
          <ProductItem
            key={product.articleId}
            ProductImg={productImage}
            price={product.buyoutPrice}
            time={product.createdAt}
            title={product.title}
            onClick={() => navigateToProductDetail(product.articleId)}
          />
        );
      })}
    </>
  );
};

export default AllProduct;
