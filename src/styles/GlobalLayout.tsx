import FreeMarket from '@/pages/main/components/FreeMarket';
import styled from '@emotion/styled';

export const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PCLayout>
        <GlobalFreeMarketLayout>
          <FreeMarket />
        </GlobalFreeMarketLayout>
        <ContentsLayout>{children}</ContentsLayout>
        <BlankLayout></BlankLayout>
      </PCLayout>
    </>
  );
};

export const PCLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  margin-top: 7.5rem;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 1280px) {
    /** 타블렛 가로, 노트북 */
    grid-template-columns: 2fr 3fr 2fr;
  }
  @media screen and (min-width: 1281px) {
    /** 데스크탑 */
    grid-template-columns: 1fr 3fr 1fr;
  }
`;

const GlobalFreeMarketLayout = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-direction: flex-start;
  margin: 1rem;
`;

const ContentsLayout = styled.div`
  background-color: #fff;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BlankLayout = styled.div`
  background-color: white;
  justify-content: center;
  align-items: center;
`;
