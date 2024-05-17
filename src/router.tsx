import { createBrowserRouter, Outlet } from 'react-router-dom';

import Header from '@/components/header';
import MainPage from '@/pages/MainPage';
import ChattingPage from '@/pages/chatting/ChattingPage';
import DetailPage from '@/pages/detail/DetailPage';
import LoginPage from '@/pages/login';
import { RedirectPage } from '@/pages/login/RedirectPage.tsx';
import { NickNamePage } from '@/pages/nickname/NickNamePage.tsx';
import SellPage from '@/pages/sell/SellPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Header>
        <Outlet />
      </Header>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'redirection',
        element: <RedirectPage />,
      },
      {
        path: 'nickname',
        element: <NickNamePage />,
      },
      {
        path: '/chat',
        element: <ChattingPage />,
      },
      {
        path: '/sell',
        element: <SellPage />,
      },
      {
        path: '/detail',
        element: <DetailPage />,
      },
    ],
  },
]);

// //   {
// //     path: '/product',
// //     children: [
// //       //   { path: '/:user', element: <UserProductPage /> },
// //       {
// //         path: '/my',
// //         element: <MyProductPage />,
// //       },
// //     ],
// //   },
