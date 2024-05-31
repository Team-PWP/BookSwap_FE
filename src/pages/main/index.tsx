import MainProduct from './components/MainProduct';
import { GlobalLayout } from '@/styles/GlobalLayout';

const MainPage: React.FC = () => {
  return (
    <GlobalLayout>
      <MainProduct />
    </GlobalLayout>
  );
};

export default MainPage;
