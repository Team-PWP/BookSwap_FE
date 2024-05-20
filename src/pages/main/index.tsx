import FreeMarket from './components/FreeMarket';
import * as Styles from './styles';

const MainPage = () => {
  return (
    <>
      <Styles.MainLayout>
        <Styles.GlobalFreeMarketLayout>
          <FreeMarket />
        </Styles.GlobalFreeMarketLayout>
        <Styles.ContentsLayout>2</Styles.ContentsLayout>
        <Styles.BlankLayout>3</Styles.BlankLayout>
      </Styles.MainLayout>
    </>
  );
};

export default MainPage;
