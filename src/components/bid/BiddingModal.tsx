import { useState } from 'react';
import Modal from 'react-modal';

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
          height: '300px',
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
        <Button onClick={handleSubmit}>입찰하기</Button>
        <Button onClick={onRequestClose}>취소하기</Button>
      </ModalContainer>
    </Modal>
  );
};

export default BiddingModal;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #6495ed;
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #4169e1;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
