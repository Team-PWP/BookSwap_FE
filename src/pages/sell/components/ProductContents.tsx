import { useEffect, useState } from 'react';

import { debounce } from 'lodash';

import * as Styles from '../styles';
import { useProductSellStore } from '@/store/useProductSellStore';

const ProductContents = () => {
  const { content, setContent } = useProductSellStore();
  const [productContent, setProductContent] = useState<string>('');

  const debouncedSetContent = debounce((value: string) => {
    setContent(value);
  }, 300);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProductContent(e.target.value);
    debouncedSetContent(e.target.value);
    setContent(e.target.value);
  };

  useEffect(() => {
    return () => {
      debouncedSetContent.cancel();
    };
  }, [debouncedSetContent]);

  console.log(productContent);
  console.log('Current Product Content in store:', content);
  return (
    <>
      <Styles.ProductSellContentsContainer>
        <Styles.ProductSellContentsTitle>
          상품 설명
        </Styles.ProductSellContentsTitle>
        <Styles.ProductSellContentsInputContainer>
          <Styles.ProductSellContentsInput
            value={productContent}
            onChange={handleTextareaChange}
            placeholder='상품 설명을 입력해주세요'
          />
          <Styles.ProductSellNameLength>0/2000</Styles.ProductSellNameLength>
        </Styles.ProductSellContentsInputContainer>
      </Styles.ProductSellContentsContainer>
    </>
  );
};

export default ProductContents;
