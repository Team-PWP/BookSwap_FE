import { axiosClient } from '../AxiosClient';
import { SearchRequest } from './search.request';

export async function getSearch(
  page: number,
  size: number,
  keyword: string
): Promise<SearchRequest> {
  const response = await axiosClient.get(`/api/article/search`, {
    params: {
      page,
      size,
      keyword,
    },
  });
  return response.data;
}
