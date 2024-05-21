import FreeMarket from './components/FreeMarket';
import MainProduct from './components/MainProduct';
import * as Styles from './styles';
import { PCLayout } from '@/styles/PcLayout';

const MainPage = () => {
  return (
    <>
      <PCLayout>
        <Styles.GlobalFreeMarketLayout>
          <FreeMarket />
        </Styles.GlobalFreeMarketLayout>
        <Styles.ContentsLayout>
          <MainProduct />
        </Styles.ContentsLayout>
        <Styles.BlankLayout>3</Styles.BlankLayout>
      </PCLayout>
    </>
  );
};

export default MainPage;
