import { useCallback, useEffect, useRef, useState } from 'react';

import * as Styles from '../styles';
import AddImg from '@/assets/Add-Image.svg';
import { useProductSellStore } from '@/store/useProductSellStore';

const ProductImage = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const { setImageUrl } = useProductSellStore();
  const [fileDataUrl, setFileDataUrl] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');

  const fileInputHandler = useCallback(
    (event: Event) => {
      const target = event.target as HTMLInputElement;
      const files = target.files;

      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result !== null) {
            setFileDataUrl(reader.result.toString());
          }
        };
        reader.readAsDataURL(files[0]);
        setFileName(files[0].name);
        setImageUrl([files[0]]);
      }
    },
    [setImageUrl]
  );

  useEffect(() => {
    const inputElement = inputEl.current;
    if (inputElement !== null) {
      inputElement.addEventListener('input', fileInputHandler);
    }
    return () => {
      if (inputElement) {
        inputElement.removeEventListener('input', fileInputHandler);
      }
    };
  }, [fileInputHandler]);

  return (
    <Styles.ProductSellImageContainer>
      <Styles.ProductSellImageTitle>
        <Styles.ProductSellImageText>상품이미지</Styles.ProductSellImageText>
        <Styles.ProductImgNumber>(0/5)</Styles.ProductImgNumber>
        <label htmlFor='file'>
          <Styles.StyledFileInput>
            <Styles.ProductSellAddImage>
              <Styles.ProductSellImage src={AddImg} />
              이미지 등록
            </Styles.ProductSellAddImage>
            {fileDataUrl && (
              <Styles.AttachedFile className='file-name'>
                <img width='200px' src={fileDataUrl} alt={fileName} />
              </Styles.AttachedFile>
            )}
          </Styles.StyledFileInput>
        </label>
        <Styles.Input type='file' id='file' ref={inputEl} />
      </Styles.ProductSellImageTitle>
    </Styles.ProductSellImageContainer>
  );
};

export default ProductImage;
