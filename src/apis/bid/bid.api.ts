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
  parameters: { page: number; size: number },
  // page: number,
  // size: number,
  articleId: number
): Promise<bidRequest> {
  try {
    const response = await axiosClient.get(`/api/bid/${articleId}`, {
      params: parameters,
    });
    return response.data;
  } catch (error) {
    throw new Error('요청을 불러오는데 실패했습니다.');
  }
}

export async function deleteBid(bidId: number): Promise<bidRequest> {
  const response = await axiosClient.delete(`/api/bid/${bidId}`, {});
  return response.data;
}

// export async function getBidList()
