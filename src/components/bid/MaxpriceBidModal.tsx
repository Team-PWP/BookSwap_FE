import Modal from 'react-modal';

import { Button, Flex } from 'antd';

import { Bidding } from '@/apis/bid/bid.api.ts';
import { useAuctionStore } from '@/store/useAuctionStore';
import { useBuyoutStore } from '@/store/useBuyoutStore';
import styled from '@emotion/styled';

Modal.setAppElement('#root');

type BiddingModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  articleId: number;
};

const MaxpriceBidModal: React.FC<BiddingModalProps> = ({
  isOpen,
  onRequestClose,
  articleId,
}) => {
  const { setNewBidPrice } = useAuctionStore();
  const buyoutPrice = useBuyoutStore((state) => state.buyoutPrice);

  const handleSubmit = async () => {
    try {
      await Bidding(articleId, buyoutPrice);
      alert('즉시구매가 성공적으로 완료되었습니다.');
      setNewBidPrice(buyoutPrice);
      onRequestClose();
    } catch (error) {
      console.error(error);
      alert('즉시구매에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Bidding Modal'
      style={{
        content: {
          width: '300px',
          height: '200px',
          margin: 'auto',
          borderRadius: '10px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      <ModalContainer>
        <h2>즉시 구매하기</h2>
        <ButtonContainer>
          <Flex gap={'small'}>
            <Button type='primary' onClick={handleSubmit}>
              구매하기
            </Button>
            <Button type='primary' onClick={onRequestClose}>
              취소하기
            </Button>
          </Flex>
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  );
};

export default MaxpriceBidModal;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
