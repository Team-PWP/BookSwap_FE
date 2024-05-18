import { axiosClient } from '@/apis/AxiosClient.ts';
import { MyInfoResponse } from '@/apis/shop/shop.response.ts';

// import { MyInfoResponse } from '@/apis/shop/shop.response.ts';

export async function myInfo(): Promise<MyInfoResponse> {
  const myData = await axiosClient.get('/api/user');
  return myData.data;
}
