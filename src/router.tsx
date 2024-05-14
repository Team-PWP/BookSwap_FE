import { createBrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage';
import ChattingPage from './pages/chatting/ChattingPage';
import DetailPage from './pages/detail/DetailPage';
import LoginPage from './pages/login/LoginPage';
import RedirectPage from './pages/login/RedirectPage';
import MyProductPage from './pages/product/MyProductPage';
import UserProductPage from './pages/product/UserProductPage';
import SellPage from './pages/sell/SellPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'redirect',
        element: <RedirectPage />,
      },
    ],
  },
  {
    path: '/chatting',
    element: <ChattingPage />,
  },
  //   {
  //     path: '/product',
  //     children: [
  //       //   { path: '/:user', element: <UserProductPage /> },
  //       {
  //         path: '/my',
  //         element: <MyProductPage />,
  //       },
  //     ],
  //   },
  {
    path: '/sell',
    element: <SellPage />,
  },
  {
    path: '/detail',
    element: <DetailPage />,
  },
]);
