import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProductTypes } from '../type';
import ProductItem from './ProductItem';
import { getAllProducts } from '@/apis/product/product.api';
import { usePageStore } from '@/store/usePageStore';

const AllProduct: React.FC = () => {
  const { page } = usePageStore();
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const navigate = useNavigate();

  const fetchProducts = useCallback(async () => {
    const parameters = {
      page: page,
      size: 9,
    };
    try {
      const products = await getAllProducts(parameters);
      setProducts(products.data);
      console.log('불러온 물건들 :', products.data);
    } catch (error) {
      console.error('물건을 불러올 수 없음 !', error);
    }
  }, [page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

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
