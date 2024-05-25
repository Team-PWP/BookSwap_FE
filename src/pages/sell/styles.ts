import styled from '@emotion/styled';

export const ProductSellContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
`;

export const ProductSellInfoTitle = styled.div`
  display: flex;
  padding: 1.5625rem 0rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-bottom: 1.5px solid #000;
`;

export const ProductImgNumber = styled.div`
  color: #7a7a7a;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem;
`;

export const ProductSellImageContainer = styled.div`
  display: flex;
  padding: 0.625rem 0rem;
  align-items: flex-start;
  flex-direction: row;
  gap: 1.25rem;
  align-self: stretch;
`;

export const ProductSellImageTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.625rem;
  text-align: left;
`;

export const ProductSellImageText = styled.div`
  color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProductSellAddImage = styled.div`
  display: flex;
  width: 12.5rem;
  height: 12.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  border-radius: 0.125rem;
  border: 1px solid #b2b2b2;
  background: #fafafa;
  cursor: pointer;

  color: #979797;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProductSellImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
`;

export const ProductSellNameContainer = styled.div`
  display: flex;
  padding: 0.625rem 0rem;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;
`;

export const ProductSellNameTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-right: 4.23rem;
`;

export const ProductSellNameInput = styled.input`
  display: flex;
  height: 2.1875rem;
  padding: 0rem 0.625rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.3125rem;
  flex: 1 0 0;
  border-radius: 0.125rem;
  border: 1px solid #b2b2b2;
  background: #fff;

  color: #979797;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProductSellNameLength = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProductSellContentsContainer = styled.div`
  display: flex;
  padding: 0.625rem 0rem;
  align-items: flex-start;
  gap: 1.25rem;
  align-self: stretch;
`;

export const ProductSellContentsTitle = styled.div`
  display: flex;
  width: 7.4375rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;

  color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProductSellContentsInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 0.625rem;
  flex: 1 0 0;
`;

export const ProductSellContentsInput = styled.textarea`
  display: flex;
  height: 11.25rem;
  padding: 0.625rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  border-radius: 0.125rem;
  border: 1px solid #b2b2b2;
  background: #fff;
`;

export const ProductSellContentsLength = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProductSellPriceContainer = styled.div`
  display: flex;
  padding: 1.5625rem 0rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-bottom: 1.5px solid #000;
  color: #000;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProductSellPriceTitleContainer = styled.div`
  display: flex;
  padding: 0.625rem 0rem;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;
`;

export const ProductSellPriceTitle = styled.div`
  display: flex;
  width: 8.4375rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProductSellPriceInputContainer = styled.input`
  display: flex;
  width: 18rem;
  height: 2.1875rem;
  padding: 0rem 0.625rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.125rem;
  border: 1px solid #b2b2b2;
  background: #fff;
`;

export const ProductSellSubmitContainer = styled.div`
  display: flex;
  padding: 1.25rem 0rem;
  justify-content: flex-end;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;
`;

export const ProductSellSubmitButton = styled.div`
  display: flex;
  width: 8.125rem;
  height: 2.8125rem;
  padding: 0rem 0.625rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.125rem;
  background: #78bdff;
  cursor: pointer;

  color: #fff;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

// input test
export const StyledFileInput = styled.div`
  display: flex;
  gap: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 16px;
  width: 400px;
  align-items: center;
  text-align: center;
`;

export const AttachmentButton = styled.div`
  width: fit-content;
  padding: 16px;
  background-color: #191b27;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;

export const AttachedFile = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;
