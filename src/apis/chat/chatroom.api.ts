import { axiosClient } from '../AxiosClient';
import { chatroomlistRequest, chatcreateRequest } from './chatroom.request';

export async function chatRoomList(
  page: number,
  size: number
): Promise<chatroomlistRequest> {
  const response = await axiosClient.get(`/api/chatRoom`, {
    params: {
      page,
      size,
    },
  });
  return response.data;
}

export async function chatRoomCreate(
  articleId: number,
  buyerId: number,
  sellerId: number,
  title: string
): Promise<chatcreateRequest> {
  const response = await axiosClient.post(`/api/chatRoom`, {
    articleId,
    buyerId,
    sellerId,
    title,
  });
  return response.data;
}
