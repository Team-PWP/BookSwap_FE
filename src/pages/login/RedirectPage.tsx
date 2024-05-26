import { authApi } from '@/apis/auth/auth.api.ts';
import { BASE_URI } from '@/constants/URI.ts';

export const RedirectPage = () => {
  const CODE: string | null = new URLSearchParams(window.location.search).get(
    'code'
  );
  console.log(`${BASE_URI}/oauth2?code=${CODE}`);

  authApi(CODE);

  return (
    <>
      <h2>로그인 진행중!</h2>
      <div>redirect page</div>
    </>
  );
};
