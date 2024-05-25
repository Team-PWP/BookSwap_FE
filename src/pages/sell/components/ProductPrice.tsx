import { useEffect, useState } from 'react';

import { debounce } from 'lodash';

import * as Styles from '../styles';
import { useProductSellStore } from '@/store/useProductSellStore';

const ProductPrice = () => {
  const { setBuyoutPrice, setMinPrice } = useProductSellStore();
  const [productBuyoutPrice, setProductBuyoutPrice] = useState<number>(0);
  const [productMinPrice, setProductMinPrice] = useState<number>(0);

  const debouncedSetBuyoutPrice = debounce((value: number) => {
    setBuyoutPrice(value);
  }, 300);

  const debouncedSetMinPrice = debounce((value: number) => {
    setMinPrice(value);
  }, 300);

  const handleProductBuyPriceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductBuyoutPrice(Number(e.target.value));
    debouncedSetBuyoutPrice(Number(e.target.value));
    setBuyoutPrice(Number(e.target.value));
  };

  const handleProductMinPriceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductMinPrice(Number(e.target.value));
    debouncedSetMinPrice(Number(e.target.value));
    setMinPrice(Number(e.target.value));
  };

  useEffect(() => {
    return () => {
      debouncedSetBuyoutPrice.cancel();
      debouncedSetMinPrice.cancel();
    };
  }, [debouncedSetBuyoutPrice, debouncedSetMinPrice]);

  return (
    <>
      <Styles.ProductSellPriceContainer>
        상품 가격
      </Styles.ProductSellPriceContainer>
      <Styles.ProductSellPriceTitleContainer>
        <Styles.ProductSellPriceTitle>
          즉시 구매 가격
        </Styles.ProductSellPriceTitle>
        <Styles.ProductSellPriceInputContainer
          placeholder='가격을 입력해주세요.'
          type='number'
          id='buyoutPrice'
          value={productBuyoutPrice}
          onChange={handleProductBuyPriceChange}
        />
      </Styles.ProductSellPriceTitleContainer>
      <Styles.ProductSellPriceTitleContainer>
        <Styles.ProductSellPriceTitle>
          최소 입찰 가격
        </Styles.ProductSellPriceTitle>
        <Styles.ProductSellPriceInputContainer
          placeholder='가격을 입력해주세요.'
          type='number'
          id='minPrice'
          value={productMinPrice}
          onChange={handleProductMinPriceChange}
        />
      </Styles.ProductSellPriceTitleContainer>
    </>
  );
};

export default ProductPrice;
