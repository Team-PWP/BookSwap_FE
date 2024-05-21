import styled from '@emotion/styled';

export const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  margin-top: 7.5rem;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 1280px) {
    /** 타블렛 가로, 노트북 */
    grid-template-columns: 1fr 2fr 1fr;
  }

  @media screen and (min-width: 1281px) {
    /** 데스크탑 */
    grid-template-columns: 1fr 3fr 1fr;
  }
`;
export const GlobalFreeMarketLayout = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

export const GlobalFreeMarketContainer = styled.div`
  background-color: #e1eef8;
  width: 100%;
  height: 25rem;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  border: 1px solid #4c89ff;
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
export const ContentsLayout = styled.div`
  background-color: yellow;
`;
export const BlankLayout = styled.div`
  background-color: #f5f5f5;
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
