/* eslint-disable import/default */
import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/header';
import styled from '@emotion/styled';

const LayoutContainer = styled.div`
  padding-top: 120px; /* 헤더의 높이만큼 패딩을 추가하여 콘텐츠가 겹치지 않도록 함 */
`;

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
};

export default Layout;
