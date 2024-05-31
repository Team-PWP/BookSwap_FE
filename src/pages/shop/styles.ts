import styled from '@emotion/styled';

export const ShopLayout = styled.div`
  //margin-top: 120px;
  //padding: 1rem 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  //background-color: #9a9a9a;
  margin: 7.5rem 20rem;
`;

export const TitleContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: row;

  //background-color: #bababa;
`;

export const PageTitle = styled.div`
  text-align: left;
  font-size: 1.5rem;
  margin-left: 1rem;
`;

export const UserInfoLayout = styled.div`
  //text-align: left;
  //margin: 1rem 1rem;
  display: flex;
  //align-items: center;
  //flex-direction: column;
  border: 1px solid #b6b6b6;
`;

export const UserImg = styled.img`
  width: 12rem;
  height: 12rem;
`;

export const UserInfoContainer = styled.div`
  //width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  //justify-content: space-between;
  gap: 2rem;
  align-content: center;
  align-items: center;
  //text-align: center;
  //justify-content: center;
  margin: 1rem 1rem;
  width: 100%;
`;

export const NicknameItem = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const NicknameEdit = styled.div`
  font-size: 0.7rem;
  border: 0.063rem solid #8f8f8f;
  color: #8f8f8f;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  align-content: center;
  border-radius: 0.25rem;
  &:hover {
    color: #4c89ff;
    border-color: #4c89ff;
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-left: 1rem;
`;

export const EmailItem = styled.div`
  font-size: 0.85rem;
  color: #626262;
`;

export const KakaoContainer = styled.div`
  font-size: 0.55rem;
  border-radius: 2rem;
  padding: 0.063rem 0.5rem 0.063rem 0.25rem;
  cursor: pointer;
  align-content: center;
  background-color: #fee500;
  display: flex;
  align-items: center;
  gap: 0.125rem;
`;

export const KakaoSymbol = styled.img`
  width: 1rem;
`;
