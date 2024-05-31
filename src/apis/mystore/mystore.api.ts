import { axiosClient } from '../AxiosClient';
import { myStoreRequest } from './mystore.request';

export async function myStore(
  page: number,
  size: number,
  userId: number
): Promise<myStoreRequest> {
  const response = await axiosClient.get(`/api/user/${userId}`, {
    params: {
      page,
      size,
    },
  });
  return response.data;
}
