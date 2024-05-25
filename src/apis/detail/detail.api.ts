import { axiosClient } from '../AxiosClient';
import { detailInfoRequest } from './detail.request';

// export async function DetailInfo(request: detailInfoRequest): Promise<void> {
//   const productInfo = await axiosClient.post('/api/article', { ...request });
//   return productInfo.data;
// }

export async function DetailCheck(
  pageNumber: number
): Promise<detailInfoRequest> {
  const myData = await axiosClient.get(`/api/article/${pageNumber}`);
  return myData.data;
}

export async function DetailDelete(
  pageNumber: number
): Promise<detailInfoRequest> {
  const myData = await axiosClient.delete(`/api/article/${pageNumber}`);
  return myData.data;
}
