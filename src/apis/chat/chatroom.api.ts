import { axiosClient } from '../AxiosClient';
import { chatroomlistRequest } from './chatroom.request';

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
