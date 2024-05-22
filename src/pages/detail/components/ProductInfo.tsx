import * as Styles from '../styles';
import UploadInfo from './UploadInfo';
import ClockIcon from '@/assets/Clock-Icon.svg';
import PickIcon from '@/assets/Pick-Icon-hv.svg';

const ProductInfo = () => {
  return (
    <>
      <Styles.ProductDetailInfoContainer>
        <Styles.ProductDetailImageContainer>
          <Styles.ProductDetailImage>상품이미지</Styles.ProductDetailImage>
        </Styles.ProductDetailImageContainer>
        <Styles.ProductDetailInfo>
          <Styles.ProductDetailInfoTitle>
            <Styles.ProductTitle>
              한성컴퓨터 무접점 키보드 GK893B
            </Styles.ProductTitle>
            <Styles.ProductDetailPrice>129,000원</Styles.ProductDetailPrice>
          </Styles.ProductDetailInfoTitle>
          <Styles.ProductDetailContentsInfo>
            <Styles.ProductDetailLikeTime>
              <Styles.ProductDetailLike>
                <Styles.ProductInfoIcon src={PickIcon} />3
              </Styles.ProductDetailLike>
              <Styles.ProductDetailTime>
                <Styles.ProductInfoIcon src={ClockIcon} />
                3시간 전
              </Styles.ProductDetailTime>
            </Styles.ProductDetailLikeTime>
            <UploadInfo />
            {/* <Styles.ProductDetailUploadInfo>
              <Styles.ProductDetailDate>
                <Styles.ProductUserInfoTitle>
                  올린 날짜 :
                </Styles.ProductUserInfoTitle>
                <Styles.ProductUserInfoText>
                  2024년 5월 25일
                </Styles.ProductUserInfoText>
              </Styles.ProductDetailDate>
              <Styles.ProductDetailUser>
                <Styles.ProductUserInfoTitle>
                  올린 유저 :
                </Styles.ProductUserInfoTitle>
                <Styles.ProductUserInfoText>
                  김토토로
                </Styles.ProductUserInfoText>
              </Styles.ProductDetailUser>
              <Styles.ProductUserButtonContainer>
                <Styles.ProductUserInfoButton>
                  채팅하기
                </Styles.ProductUserInfoButton>
                <Styles.ProductUserInfoButton>
                  즉시구매
                </Styles.ProductUserInfoButton>
                <Styles.ProductUserInfoButton>
                  입찰하기
                </Styles.ProductUserInfoButton>
              </Styles.ProductUserButtonContainer>
            </Styles.ProductDetailUploadInfo> */}
          </Styles.ProductDetailContentsInfo>
        </Styles.ProductDetailInfo>
      </Styles.ProductDetailInfoContainer>
    </>
  );
};

export default ProductInfo;
