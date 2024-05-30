import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import ProductDetail from './components/ProductDetail';
import { GlobalLayout } from '@/styles/GlobalLayout';
import { TitleContainer } from '@/styles/TitleStyle';
import { ArrowLeftOutlined } from '@ant-design/icons';

const DetailPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <GlobalLayout>
        <TitleContainer>
          <ButtonWrapper>
            <ArrowLeftOutlined
              onClick={() => {
                navigate('/');
              }}
            />
          </ButtonWrapper>
          상품 상세 페이지
        </TitleContainer>
        <ProductDetail />
      </GlobalLayout>
    </>
  );
};

export default DetailPage;

const ButtonWrapper = styled.div`
  margin-right: 5px;
`;
