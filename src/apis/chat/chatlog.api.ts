import { axiosClient } from '../AxiosClient';
import { chatlogRequest } from './chatlog.request';

export async function chatlog(
  page: number,
  size: number,
  chatRoomId: number
): Promise<chatlogRequest> {
  const response = await axiosClient.get(`/api/chatMessage/${chatRoomId}`, {
    params: {
      page,
      size,
    },
  });
  return response.data;
}
