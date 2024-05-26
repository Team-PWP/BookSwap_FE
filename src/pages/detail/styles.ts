import styled from '@emotion/styled';

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
`;

export const ProductDetailInfoContainer = styled.div`
  display: flex;
  padding: 0.625rem 0rem;
  align-items: flex-start;
  gap: 1.875rem;
  align-self: stretch;
`;

export const ProductDetailContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  flex: 1 0 0;
  align-self: stretch;
`;

export const ProductDetailContentsTitle = styled.div`
  display: flex;
  padding: 1.25rem 0rem 0.625rem 0rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;

  border-bottom: 1px solid #cfcfcf;
`;

export const ProductDetailContentsItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  align-self: stretch;
`;

export const ProductDetailImageContainer = styled.div`
  display: flex;
  width: 18.75rem;
  height: 20.3125rem;
  flex-direction: column;
  align-items: center;
`;

export const ProductDetailImage = styled.div`
  width: 18.75rem;
  height: 18.75rem;
  flex-shrink: 0;
  background-color: #929292;
`;

export const PageNavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex: 1 0 0;
  align-self: stretch;
`;

export const ProductDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

export const ProductDetailInfoTitle = styled.div`
  display: flex;
  padding-bottom: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  align-self: stretch;
  border-bottom: 1px solid #f2f2f2;
`;

export const ProductTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;
export const ProductDetailPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  color: #303030;

  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ProductDetailContentsInfo = styled.div`
  display: flex;
  height: 12.75rem;
  padding-top: 0.9375rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

export const ProductDetailLikeTime = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
  text-align: center;
`;

export const ProductDetailLike = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
  align-self: stretch;

  color: #303030;

  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProductDetailTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
  align-self: stretch;
  color: #000;

  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProductDetailUploadInfo = styled.div`
  display: flex;
  width: 19rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
`;

export const ProductDetailDate = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;
`;

export const ProductDetailUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;
`;

export const ProductUserInfoTitle = styled.div`
  display: flex;
`;

export const ProductUserInfoText = styled.div`
  display: flex;
`;

export const ProductUserInfoButton = styled.div`
  display: flex;
  height: 2.625rem;
  width: 7rem;
  background-color: #fff;
  border-radius: 0.3125rem;
  padding: 0rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  &:hover {
    background-color: ${(props) => props.color};
    color: #fff;
  }
`;

export const ProductUserButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3.5rem;
`;

export const ProductInfoIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const ProductDetailDeleteContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 4rem 2.5rem;
  align-items: center;
  gap: 0.625rem;
  flex: 1 0 0;
  align-self: stretch;
`;

export const ProductActionBidContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 1rem 1rem 0 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
`;

export const BidTable = styled.div`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const BidTableRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e2e2e2;

  &:last-child {
    border-bottom: none;
  }
`;

export const BidTableCell = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  color: #4c88ff;

  &:first-of-type {
    text-align: left;
  }

  &:last-of-type {
    text-align: right;
  }
`;

// export const BidButton = styled.button`
//   background-color: #4c88ff;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   padding: 10px 20px;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #3a6bcc;
//   }
// `;

export const BidStatusList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  margin-top: 20px;
`;

export const BidStatusItem = styled.li`
  background-color: #f4f4f4;
  border-left: 5px solid #4c88ff;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #333;
`;
