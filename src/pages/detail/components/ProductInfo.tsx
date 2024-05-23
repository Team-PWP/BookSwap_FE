import * as Styles from '../styles';
import UploadInfo from './UploadInfo';
import ClockIcon from '@/assets/Clock-Icon.svg';
import PickIcon from '@/assets/Pick-Icon-hv.svg';

const ProductInfo = ({
  Title,
  Img,
  BuyoutPrice,
  Time,
  date,
}: {
  Title: string;
  Img: string;
  BuyoutPrice: number;
  Time: string;
  date: string;
}) => {
  return (
    <>
      <Styles.ProductDetailInfoContainer>
        <Styles.ProductDetailImageContainer>
          <Styles.ProductDetailImage src={Img} />
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
