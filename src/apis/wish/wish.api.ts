import { axiosClient } from '../AxiosClient';
import { addWishlistRequest, wishlistRequest } from './wish.request';

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

export async function addWishlist(
  articleId: number
): Promise<addWishlistRequest> {
  const wishCount = await axiosClient.post(`/api/wish/${articleId}`, {});
  return wishCount.data;
}
