import styled from '@emotion/styled';

export const PCLayout = styled.div`
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
