import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { BASE_URI } from '@/constants/URI.ts';

export const useOauth2Redirect = (code: string | null) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      axios
        .get(`${BASE_URI}/oauth2?code=${code}`, {
          withCredentials: true,
        })
        .then((res) => {
          const accessToken = res.headers.authorization;
          console.log(accessToken);

          // Save the token to localStorage
          localStorage.setItem('accessToken', accessToken);

          navigate('/nickname');
        })
        .catch((error) => {
          console.error('Error during OAuth2 redirect:', error);
        });
    }
  }, [code, navigate]);
};
