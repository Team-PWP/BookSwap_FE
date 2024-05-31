import styled from '@emotion/styled';

export const GlobalFreeMarketContainer = styled.div`
  width: 100%;
  height: 25rem;
  margin-top: 0;
`;

export const GlobalFreeMarketTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  background-color: #4c89ff;
  width: 100%;
  padding: 0.5rem 0;
  color: #fff;
  display: flex;
`;

export const TitleText = styled.div`
  margin: 0 0.75rem;
  font-size: 1rem;
  font-weight: 700;
`;

export const GlobalFreeMarketContents = styled.div`
  width: 100%;
  height: 100%;
  margin: 0.5rem 0.75rem;
  text-align: left;
  line-height: 2rem;
  overflow: hidden;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
`;

export const InputItem = styled.input`
  width: 100%;
  height: 2rem;
  border: none;
  outline: none;
  margin-left: 0.5rem;
  font-size: 1.2rem;
`;

export const SendButton = styled.img`
  width: 1.5rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.2rem;
`;

export const EmojiButton = styled.img`
  width: 1.5rem;
  margin-left: 0.5rem;
`;

export const Line = styled.hr`
  color: #000;
  width: 100%;
  margin: 1rem 0;
`;

export const FreeMarketEnterContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const FreeMarketEnterButton = styled.div`
  background-color: #fff;
  color: #4c89ff;
  width: 100%;

  padding: 0.5rem 1rem;
  border: 1px solid #4c89ff;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 1rem 0;

  &:hover {
    background-color: #4c89ff;
    color: #fff;
  }
`;

/* MainProduct */

export const MainProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-content: space-between;
  /* flex-direction: item-be */
  /* margin: 1rem 1rem; */
`;
export const MainProductItem = styled.div`
  display: flex;
  width: 12.5rem;
  height: 17.1875rem;
  flex-direction: column;
  align-items: center;
  /* border-top: 1px solid #e1eef8; */
  cursor: pointer;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  padding: 0.625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  /* flex: 1 0 0; */
  align-self: stretch;
  border: 1px solid #f0f0f0;
`;

export const ProductInfoTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 원하는 최대 너비 설정 */
  max-width: 160px;
`;

export const ProductImage = styled.img`
  align-items: center;
  justify-content: center;
  display: flex;
  /* background-color: gray; */
  border: 1px solid #e1eef8;
  /* flex: 1 0 0; */
  align-self: stretch;
  width: 12.5rem;
  height: 12.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  padding: 0.1875rem 0rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 1rem 0;
`;

export const MyPageNation = styled.div`
  .pagination {
    /* 페이지네이션 컴포넌트의 스타일 */
    display: flex;
    width: 50vw;
    min-width: 555px;
    padding: 70px 16px 16px 16px;
  }

  .page-item {
    /* 페이지 항목의 스타일 */
    cursor: pointer;
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    margin-right: 4px;
    padding: 0px 8px 0px 8px;

    &:hover {
      background-color: #e3e6e8;
    }
  }

  .active {
    /* 활성 상태의 스타일 */
    background-color: #4c88ff;
    color: white;

    &:hover {
      background-color: #4c88ff;
    }
  }

  .break {
    /* '...' 이후의 컴포넌트 스타일 */
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;

    border-radius: 3px;
    margin-right: 4px;
    padding: 0px 8px 0px 8px;
  }

  .previous {
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;

    border-radius: 3px;
    margin-right: 4px;
    padding: 0px 8px 0px 8px;
  }
`;
