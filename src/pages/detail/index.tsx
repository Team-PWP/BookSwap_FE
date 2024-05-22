import ProductInfo from './components/ProductInfo';
import * as Styles from './styles';
import { GlobalLayout } from '@/styles/GlobalLayout';
import { TitleContainer } from '@/styles/TitleStyle';

const DetailPage = () => {
  return (
    <>
      <GlobalLayout>
        <TitleContainer>상품 상세 페이지</TitleContainer>
        <Styles.ProductDetailContainer>
          <ProductInfo />
          {/* <Styles.ProductDetailInfoContainer>
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
                  <Styles.ProductDetailLike>좋아요 3</Styles.ProductDetailLike>
                  <Styles.ProductDetailTime>3시간 전</Styles.ProductDetailTime>
                </Styles.ProductDetailLikeTime>
                <Styles.ProductDetailUploadInfo>
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
                </Styles.ProductDetailUploadInfo>
              </Styles.ProductDetailContentsInfo>
            </Styles.ProductDetailInfo>
          </Styles.ProductDetailInfoContainer> */}
          <Styles.ProductDetailContentsContainer>
            <Styles.ProductDetailContentsTitle>
              상품 정보
            </Styles.ProductDetailContentsTitle>
            <Styles.ProductDetailContentsItem>
              사놓고 3번도 사용 안했습니다. 거의 새거에요. <br />
              기스 없고, 키감 좋습니다. <br />
              5만원에 샀는데, 급하게 판매하게 되어서 3만원에 올려봅니다.
              <br />
              상태는 정말 좋아요! 택배비 3,000원은 별도입니다.
            </Styles.ProductDetailContentsItem>
          </Styles.ProductDetailContentsContainer>
        </Styles.ProductDetailContainer>
      </GlobalLayout>
    </>
  );
};

export default DetailPage;
