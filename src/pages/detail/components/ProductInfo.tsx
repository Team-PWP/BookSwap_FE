import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as Styles from '../styles';
import { ProductInfoProps } from '../type';
import UploadInfo from './UploadInfo';
import { addWishlist } from '@/apis/wish/wish.api';
import ClockIcon from '@/assets/Clock-Icon.svg';
import PickIcon from '@/assets/Pick-Icon-hv.svg';

const ProductInfo: React.FC<ProductInfoProps> = ({
  Title,
  Img,
  BuyoutPrice,
  Time,
  date,
}) => {
  const [isWished, setIsWished] = useState(false);

  const id = useParams() as { articleId: string };
  const articleId = parseInt(id.articleId);

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

  console.log('물건 정보의 articleId:', articleId);

  useEffect(() => {
    const fetchWishList = async () => {
      try {
        // 위시리스트 조회 요청을 보냅니다.
        const response = await addWishlist(articleId);

        console.log('위시리스트 조회 결과:', response);
        // 위시리스트 조회 결과를 통해 추가적인 로직을 수행할 수 있습니다.
      } catch (error) {
        console.error('위시리스트 조회 중 오류 발생:', error);
        // 오류 처리 로직 추가
      }
    };

    if (isWished) {
      fetchWishList();
      setIsWished(false);
    }
  }, [articleId, isWished]);

  const handlerWish = () => {
    setIsWished(true);
    alert('찜목록에 추가되었습니다.');
  };

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
              <Styles.ProductDetailLike onClick={handlerWish}>
                <Styles.ProductInfoIcon src={PickIcon} />
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
