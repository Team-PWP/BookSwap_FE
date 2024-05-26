import { axiosClient } from '../AxiosClient';
import { wishlistRequest } from './wish.request';

export async function getWishlist(
  page: number,
  size: number
): Promise<wishlistRequest> {
  const response = await axiosClient.get(`/api/wish`, {
    params: {
      page,
      size,
    },
  });
  return response.data;
}
