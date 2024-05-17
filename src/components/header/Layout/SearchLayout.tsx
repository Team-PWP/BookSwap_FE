import * as Styles from '../styles.ts';
import SearchLogo from '@/assets/Search-Icon.svg';

export const SearchLayout: React.FC = () => {
  return (
    <Styles.SearchLayout>
      <Styles.SearchContainer>
        <Styles.SearchInput />
        <Styles.SearchIcon src={SearchLogo} alt='검색' />
      </Styles.SearchContainer>
    </Styles.SearchLayout>
  );
};
