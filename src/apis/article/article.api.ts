import { axiosClient } from '../AxiosClient';
import { ArticleDetailCheckArticleResponse } from './article.response';

export async function articleDetailCheck(): Promise<ArticleDetailCheckArticleResponse> {
  const pageNumber = 9;
  const myData = await axiosClient.get(`/api/article/${pageNumber}`);
  return myData.data;
}
