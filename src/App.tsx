import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { GlobalStyle } from './styles/GlobalStyle';
import { Global } from '@emotion/react';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
