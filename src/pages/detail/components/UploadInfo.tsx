import { useState } from 'react';
import { useParams } from 'react-router-dom';

import * as Styles from '../styles';
import BiddingModal from '@/components/bid/BiddingModal';

const UploadInfo = ({ date }: { date: string }) => {
  const { articleId } = useParams<{ articleId: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          <Styles.ProductUserInfoButton color='#ffb347'>
            채팅하기
          </Styles.ProductUserInfoButton>
          <Styles.ProductUserInfoButton color='#32cd32'>
            즉시구매
          </Styles.ProductUserInfoButton>
          <Styles.ProductUserInfoButton color='#6495ed' onClick={openModal}>
            입찰하기
          </Styles.ProductUserInfoButton>
        </Styles.ProductUserButtonContainer>
      </Styles.ProductDetailUploadInfo>
      <BiddingModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        articleId={Number(articleId)}
      />
    </>
  );
};

export default UploadInfo;
