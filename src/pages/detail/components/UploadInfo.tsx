import { useState } from 'react';
import { useParams } from 'react-router-dom';

import * as Styles from '../styles';
import BiddingModal from '@/components/bid/BiddingModal';
import ChatCreateModal from '@/components/chat/ChatCreateModal';
import { useProductSellStore } from '@/store/useProductSellStore';
import { useUserInfoStore } from '@/store/useUserInfoStore';

const UploadInfo = ({ date }: { date: string }) => {
  const { articleId } = useParams<{ articleId: string }>();
  const [isBiddingModalOpen, setIsBiddingModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  const userId = useUserInfoStore((state) => state.userId);
  const title = useProductSellStore((state) => state.title);

  const openBiddingModal = () => setIsBiddingModalOpen(true);
  const closeBiddingModal = () => setIsBiddingModalOpen(false);

  const openChatModal = () => setIsChatModalOpen(true);
  const closeChatModal = () => setIsChatModalOpen(false);

  const handleChatStart = () => {
    console.log('Chat started');
    closeChatModal();
  };

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
          <Styles.ProductUserInfoButton color='#ffb347' onClick={openChatModal}>
            채팅하기
          </Styles.ProductUserInfoButton>
          <Styles.ProductUserInfoButton color='#32cd32'>
            즉시구매
          </Styles.ProductUserInfoButton>
          <Styles.ProductUserInfoButton
            color='#6495ed'
            onClick={openBiddingModal}
          >
            입찰하기
          </Styles.ProductUserInfoButton>
        </Styles.ProductUserButtonContainer>
      </Styles.ProductDetailUploadInfo>
      <BiddingModal
        isOpen={isBiddingModalOpen}
        onRequestClose={closeBiddingModal}
        articleId={Number(articleId)}
      />
      <ChatCreateModal
        isOpen={isChatModalOpen}
        onRequestClose={closeChatModal}
        onStart={handleChatStart}
        onCancel={closeChatModal}
        articleId={Number(articleId)}
        buyerId={userId}
        sellerId={456}
        title={title}
      />
    </>
  );
};

export default UploadInfo;
