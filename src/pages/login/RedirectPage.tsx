import { BASE_URI } from '@/constants/URI.ts';
import { useOauth2Redirect } from '@/hooks/useOauth2Redirect.ts';

export const RedirectPage = () => {
  const CODE: string | null = new URLSearchParams(window.location.search).get(
    'code'
  );
  console.log(`${BASE_URI}/oauth2?code=${CODE}`);

  useOauth2Redirect(CODE);

  return (
    <>
      <h2>로그인 진행중!</h2>
      <div>redirect page</div>
    </>
  );
};
