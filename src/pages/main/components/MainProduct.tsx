import Pagination from 'react-js-pagination';

import * as Styles from '../styles';
import AllProduct from './AllProduct';
import './page.css';
import { usePageStore } from '@/store/usePageStore';
import { TitleContainer } from '@/styles/TitleStyle';

const MainProduct = () => {
  const { page, setPage } = usePageStore();

  const handlePageChange = (page: number) => {
    setPage(page);
  };
  return (
    <>
      <TitleContainer>오늘의 상품 추천</TitleContainer>
      <Styles.MainProductContainer>
        <AllProduct />
      </Styles.MainProductContainer>
      <Styles.PaginationContainer>
        <Styles.MyPageNation>
          <Pagination
            activePage={page}
            itemsCountPerPage={9}
            totalItemsCount={200}
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
