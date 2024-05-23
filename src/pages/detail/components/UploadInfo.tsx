import * as Styles from '../styles';

const UploadInfo = ({ date }) => {
  return (
    <>
      <Styles.ProductDetailUploadInfo>
        <Styles.ProductDetailDate>
          <Styles.ProductUserInfoTitle>올린 날짜 :</Styles.ProductUserInfoTitle>
          <Styles.ProductUserInfoText>{date}</Styles.ProductUserInfoText>
        </Styles.ProductDetailDate>
        <Styles.ProductDetailUser>
          <Styles.ProductUserInfoTitle>올린 유저 :</Styles.ProductUserInfoTitle>
          <Styles.ProductUserInfoText>김토토로</Styles.ProductUserInfoText>
        </Styles.ProductDetailUser>
        <Styles.ProductUserButtonContainer>
          <Styles.ProductUserInfoButton>채팅하기</Styles.ProductUserInfoButton>
          <Styles.ProductUserInfoButton>즉시구매</Styles.ProductUserInfoButton>
          <Styles.ProductUserInfoButton>입찰하기</Styles.ProductUserInfoButton>
        </Styles.ProductUserButtonContainer>
      </Styles.ProductDetailUploadInfo>
    </>
  );
};

export default UploadInfo;
