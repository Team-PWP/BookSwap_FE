import ChattingRoom from './components/ChattingRoom';
import * as Styles from './styles';

const MainPage = () => {
  return (
    <>
      <Styles.MainLayout>
        <Styles.GlobalChattingLayout>
          <ChattingRoom />
        </Styles.GlobalChattingLayout>
        <Styles.ContentsLayout>2</Styles.ContentsLayout>
        <Styles.BlankLayout>3</Styles.BlankLayout>
      </Styles.MainLayout>
    </>
  );
};

export default MainPage;
