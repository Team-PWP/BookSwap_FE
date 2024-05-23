import { axiosClient } from '../AxiosClient';
import { detailInfoRequest } from './detail.request';

export async function DetailInfo(request: detailInfoRequest): Promise<void> {
  const productInfo = await axiosClient.post('/api/article', { ...request });
  return productInfo.data;
}

export async function DetailCheck(
  pageNumber: number
): Promise<detailInfoRequest> {
  // const pageNumber = 9;
  const myData = await axiosClient.get(`/api/article/${pageNumber}`);
  return myData.data;
}
