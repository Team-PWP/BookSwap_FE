import { createBrowserRouter, Outlet } from 'react-router-dom';

import WishListPage from './pages/wish/WishListPage';
import Header from '@/components/header';
import ChatlistPage from '@/pages/chatlist/ChatlistPage';
import ChattingPage from '@/pages/chatting/ChattingPage';
import DetailPage from '@/pages/detail';
import LoginPage from '@/pages/login';
import { RedirectPage } from '@/pages/login/RedirectPage.tsx';
import MainPage from '@/pages/main';
import { NickNamePage } from '@/pages/nickname/NickNamePage.tsx';
import MyProductPage from '@/pages/product/MyProductPage.tsx';
import SellPage from '@/pages/sell';
import { ShopPage } from '@/pages/shop';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header>
          <Outlet />
        </Header>
      </>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'chatlist',
        element: <ChatlistPage />,
      },
      {
        path: 'chatroom/:roomid',
        element: <ChattingPage />,
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
        path: 'sell',
        element: <SellPage />,
      },
      {
        path: 'detail/:articleId',
        element: <DetailPage />,
      },
      {
        path: 'product',
        element: <MyProductPage />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
      },
      {
        path: 'wishlist',
        element: <WishListPage />,
      },
    ],
  },
]);
