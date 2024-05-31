import { useNavigate } from 'react-router-dom';

import * as Styles from '../styles.ts';
import { ArrowLeftOutlined } from '@ant-design/icons';

export const TitleContainer = () => {
  const navigate = useNavigate();
  return (
    <Styles.TitleContainer>
      <ArrowLeftOutlined
        onClick={() => {
          navigate('/');
        }}
      />
      <Styles.PageTitle>내 상점</Styles.PageTitle>
    </Styles.TitleContainer>
  );
};
