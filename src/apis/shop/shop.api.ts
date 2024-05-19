import { axiosClient } from '@/apis/AxiosClient.ts';
import { FixNickNameRequest } from '@/apis/shop/shop.request.ts';
import { MyInfoResponse } from '@/apis/shop/shop.response.ts';

// import { MyInfoResponse } from '@/apis/shop/shop.response.ts';

export async function myInfo(): Promise<MyInfoResponse> {
  const myData = await axiosClient.get('/api/user');
  return myData.data;
}

export async function FixNickName(
  request: FixNickNameRequest
): Promise<string> {
  const reNickName = await axiosClient.put('/api/user', {
    ...request,
  });
  return reNickName.data;
}
