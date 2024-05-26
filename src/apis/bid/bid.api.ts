import { axiosClient } from '../AxiosClient';
import { bidRequest } from './bid.request';

export async function getBidlist(
  page: number,
  size: number
): Promise<bidRequest> {
  const response = await axiosClient.get(`/api/bid/user`, {
    params: {
      page,
      size,
    },
  });
  return response.data;
}

export async function Bidding(
  articleId: number,
  price: number
): Promise<bidRequest> {
  const response = await axiosClient.post(`/api/bid`, {
    articleId,
    price,
  });
  return response.data;
}

export async function getArticleBidlist(
  page: number,
  size: number,
  articleId: number
): Promise<bidRequest> {
  const response = await axiosClient.get(`/api/bid/${articleId}`, {
    params: {
      page,
      size,
    },
  });
  return response.data;
}

export async function deleteBid(bidId: number): Promise<bidRequest> {
  const response = await axiosClient.delete(`/api/bid/${bidId}`, {});
  return response.data;
}
