import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { BASE_URI, REDIRECT_URI, REST_API_KEY } from '@/constants/URI';

const RedirectPage = () => {
  // const code = window.location.search;
  // console.log(code);
  const navigate = useNavigate();
  const CODE: string | null = new URLSearchParams(window.location.search).get(
    'code'
  );
  console.log(`${BASE_URI}/oauth2?code=${CODE}`);
  useEffect(() => {
    axios
      .get(`${BASE_URI}/oauth2?code=${CODE}`, {
        withCredentials: true,
      })
      .then((res) => {
        let accessToken = res.headers.authorization;
        console.log(accessToken);

        //  받은 토큰 localStorage에 저장
        localStorage.setItem('accessToken', accessToken);

        // navigate('/');
      });
  }, []);

  return (
    <>
      <h2>로그인 성공!</h2>
      <div>redirect page</div>
    </>
  );
};

export default RedirectPage;
