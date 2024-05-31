import { useState } from 'react';
import Modal from 'react-modal';

import { Button, Input, Flex } from 'antd';

import { Bidding } from '@/apis/bid/bid.api.ts';
import { useAuctionStore } from '@/store/useAuctionStore';
import styled from '@emotion/styled';

Modal.setAppElement('#root');

type BiddingModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  articleId: number;
};

const BiddingModal: React.FC<BiddingModalProps> = ({
  isOpen,
  onRequestClose,
  articleId,
}) => {
  const { setNewBidPrice } = useAuctionStore();
  const [price, setPrice] = useState<number | string>('');

  const handleSubmit = async () => {
    try {
      if (typeof price === 'number' && price > 0) {
        await Bidding(articleId, price);
        alert('입찰이 성공적으로 완료되었습니다.');
        setNewBidPrice(price);
        onRequestClose();
      } else {
        alert('유효한 가격을 입력해주세요.');
      }
    } catch (error) {
      console.error(error);
      alert('입찰에 실패했습니다. 다시 시도해주세요.');
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
        <h2>입찰하기</h2>
        <Input
          type='number'
          placeholder='가격을 입력하세요'
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <ButtonContainer>
          <Flex gap={'small'}>
            <Button type='primary' onClick={handleSubmit}>
              입찰하기
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

export default BiddingModal;

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
