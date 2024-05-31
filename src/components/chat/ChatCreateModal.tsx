import { useNavigate } from 'react-router-dom';

import { Button, Flex } from 'antd';

import { chatRoomCreate } from '@/apis/chat/chatroom.api';

interface ChatCreateModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onStart: () => void;
  onCancel: () => void;
  articleId: number;
  buyerId: number;
  sellerId: number;
  title: string;
}

const ChatCreateModal: React.FC<ChatCreateModalProps> = ({
  isOpen,
  onRequestClose,
  onStart,
  onCancel,
  articleId,
  buyerId,
  sellerId,
  title,
}) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleStart = async () => {
    console.log(articleId, buyerId, sellerId, title);
    try {
      const roomId = await chatRoomCreate(articleId, buyerId, sellerId, title);
      onStart();
      navigate(`/chatroom/${roomId}`);
    } catch (error) {
      console.error('Failed to create chat room:', error);
    }
  };

  const handleCancel = () => {
    onCancel();
    onRequestClose();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>채팅을 시작하시겠습니까?</h2>
        <Flex gap={'small'}>
          <Button type='primary' style={styles.button} onClick={handleStart}>
            시작하기
          </Button>
          <Button type='primary' style={styles.button} onClick={handleCancel}>
            취소
          </Button>
        </Flex>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    height: '100px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default ChatCreateModal;
