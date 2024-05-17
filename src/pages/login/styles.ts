import styled from '@emotion/styled';

export const PCLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
`;

export const ChattingLayout = styled.div`
  display: flex;
  width: 18.75rem;
  padding: 6.25rem 1.25rem 25rem 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
`;

export const BannerLayout = styled.div`
  width: 18.75rem;
  align-self: stretch;
`;

export const PageName = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.9375rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;

export const LoginLayout = styled.div`
  display: flex;
  /* text-align: start; */
  flex-direction: column;
  /* justify-content: center; */
  /* height: 70vh; */
`;

export const LoginSection = styled.div`
  text-align: center;
  background-color: #f7f7f7;
  padding: 5rem 5rem;
  border-radius: 0.75rem;
`;
export const ButtonSection = styled.div`
  display: flex;

  text-align: center;
  margin-top: 2rem;
  justify-content: center;
`;

export const KaKaoLoginButton = styled.div`
  display: flex;
  text-align: center;
  background-color: #fee500;
  width: 15rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  align-items: center;
`;

export const KaKaoLoginLogo = styled.img`
  width: 1.5rem;
  text-align: center;

  margin-right: 2rem;
  margin-left: 1rem;
`;

export const LoginText = styled.div`
  display: flex;
  text-align: center;
  margin-left: 1rem;
`;
