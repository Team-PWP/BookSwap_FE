import { detailInfoRequest } from './detail.request';

export async function detailInfo(request: detailInfoRequest): Promise<void> {
  const info = await axiosClient.post('/api/article');
}
