import { useState } from 'react';

import * as Styles from '../styles.ts';
import { getSearch } from '@/apis/search/search.api.ts';
// import { SearchRequest } from '@/apis/search/search.request.ts';
import SearchLogo from '@/assets/Search-Icon.svg';

// interface SearchComponent {
//   articleId: number;
//   sellerId: number;
//   userNickname: string;
//   title: string;
//   buyoutPrice: number;
//   minPrice: number;
//   createdAt: string;
//   bidStartAt: string;
//   bidEndAt: string;
//   imageUrl: string[];
// }

export const SearchLayout: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  // const [results, setResults] = useState<SearchRequest[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSearch = async () => {
    if (keyword.trim() !== '') {
      try {
        const response = await getSearch(1, 10, keyword);
        console.log(response.data);
        // setResults(response.data as SearchComponent[]);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  };

  return (
    <Styles.SearchLayout>
      <Styles.SearchContainer>
        <Styles.SearchInput value={keyword} onChange={handleInputChange} />
        <Styles.SearchIcon src={SearchLogo} alt='검색' onClick={handleSearch} />
      </Styles.SearchContainer>
      {/* <div>
        {results.map((result) => (
          <div key={result.articleId}>{result.title}</div>
        ))}
      </div> */}
    </Styles.SearchLayout>
  );
};
