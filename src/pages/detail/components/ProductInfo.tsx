import { useEffect } from 'react';

import * as Styles from '../styles';
import { ProductInfoProps } from '../type';
import UploadInfo from './UploadInfo';
import ClockIcon from '@/assets/Clock-Icon.svg';
import PickIcon from '@/assets/Pick-Icon-hv.svg';

const ProductInfo: React.FC<ProductInfoProps> = ({
  Title,
  Img,
  BuyoutPrice,
  Time,
  date,
}) => {
  useEffect(() => {
    const preview = () => {
      if (Img.length === 0) return;

      const imgContainer = document.querySelector(
        '.img__box'
      ) as HTMLDivElement;
      if (!imgContainer) return;

      Img.forEach((file, index) => {
        // Check if file is a Blob or File object
        if (file instanceof Blob) {
          const reader = new FileReader();
          reader.onload = () => {
            const img = document.createElement('img') as HTMLImageElement;
            img.src = reader.result as string; // Data URL로 설정
            img.alt = `Product Image ${index}`;
            img.style.width = '300px';
            imgContainer.appendChild(img);
          };
          reader.readAsDataURL(file); // 파일을 Data URL로 읽기
        } else if (typeof file === 'string') {
          // If file is a URL, directly use it
          const img = document.createElement('img') as HTMLImageElement;
          img.src = file;
          img.alt = `Product Image ${index}`;
          img.style.width = '300px';
          imgContainer.appendChild(img);
        }
      });
    };

    preview();
  }, [Img]);

  return (
    <>
      <Styles.ProductDetailInfoContainer>
        <Styles.ProductDetailImageContainer>
          {/* <Styles.ProductDetailImage src={Img} /> */}
          <Styles.ProductDetailImage className='img__box'></Styles.ProductDetailImage>
          {/* <div className='img__box'>
            {Img.map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt={index.toString()}
              />
            ))}
          </div> */}
        </Styles.ProductDetailImageContainer>
        <Styles.ProductDetailInfo>
          <Styles.ProductDetailInfoTitle>
            <Styles.ProductTitle>{Title}</Styles.ProductTitle>
            <Styles.ProductDetailPrice>
              {BuyoutPrice}원
            </Styles.ProductDetailPrice>
          </Styles.ProductDetailInfoTitle>
          <Styles.ProductDetailContentsInfo>
            <Styles.ProductDetailLikeTime>
              <Styles.ProductDetailLike>
                <Styles.ProductInfoIcon src={PickIcon} />3
              </Styles.ProductDetailLike>
              <Styles.ProductDetailTime>
                <Styles.ProductInfoIcon src={ClockIcon} />
                {Time}
              </Styles.ProductDetailTime>
            </Styles.ProductDetailLikeTime>
            <UploadInfo date={date} />
          </Styles.ProductDetailContentsInfo>
        </Styles.ProductDetailInfo>
      </Styles.ProductDetailInfoContainer>
    </>
  );
};

export default ProductInfo;
