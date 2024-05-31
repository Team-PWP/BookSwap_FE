import { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';

import * as Styles from '../styles';
import AllProduct from './AllProduct';
import './page.css';
import { usePageStore } from '@/store/usePageStore';
import { TitleContainer } from '@/styles/TitleStyle';

const MainProduct = () => {
  const { page, setPage } = usePageStore();
  const [activePage, setActivePage] = useState(page + 1); // 프론트엔드 페이지는 1부터 시작

  useEffect(() => {
    setActivePage(page + 1); // page가 변경될 때 activePage 업데이트
  }, [page]);

  const handlePageChange = (page: number) => {
    setActivePage(page);
    setPage(page - 1);
  };
  console.log('현재페이지', page);
  return (
    <>
      <TitleContainer>오늘의 상품 추천</TitleContainer>
      <Styles.MainProductContainer>
        <AllProduct />
      </Styles.MainProductContainer>
      <Styles.PaginationContainer>
        <Styles.MyPageNation>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={9}
            totalItemsCount={50}
            pageRangeDisplayed={5}
            prevPageText={'‹'}
            nextPageText={'›'}
            onChange={handlePageChange}
          />
        </Styles.MyPageNation>
      </Styles.PaginationContainer>
    </>
  );
};

export default MainProduct;
