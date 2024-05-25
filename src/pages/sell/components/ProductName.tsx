import { useEffect, useState } from 'react';

import { debounce } from 'lodash';

import * as Styles from '../styles';
import { useProductSellStore } from '@/store/useProductSellStore';

const ProductName = () => {
  const { setTitle } = useProductSellStore();
  const [productTitle, setProductTitle] = useState<string>('');

  const debouncedSetTitle = debounce((value: string) => {
    setTitle(value);
  }, 300);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductTitle(e.target.value);
    debouncedSetTitle(e.target.value);
    setTitle(e.target.value);
  };

  useEffect(() => {
    return () => {
      debouncedSetTitle.cancel();
    };
  }, [debouncedSetTitle]);

  return (
    <>
      <Styles.ProductSellNameContainer>
        <Styles.ProductSellNameTitle>상품명</Styles.ProductSellNameTitle>
        <Styles.ProductSellNameInput
          placeholder='상품명을 입력해주세요'
          value={productTitle}
          onChange={handleInputChange}
        />
        <Styles.ProductSellNameLength>(0/50)</Styles.ProductSellNameLength>
      </Styles.ProductSellNameContainer>
    </>
  );
};

export default ProductName;
