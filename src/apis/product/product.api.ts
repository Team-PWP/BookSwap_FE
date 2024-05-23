import { axiosClient } from '../AxiosClient';
import { AllProductParameters, AllProductResponse } from './product.response';

export async function getAllProducts(
  parameters: AllProductParameters
): Promise<AllProductResponse> {
  try {
    const response = await axiosClient.get<AllProductResponse>('/api/article', {
      params: parameters,
    });
    console.log('response:', response);
    return response.data;
  } catch (error) {
    // 오류 처리 로직을 추가할 수 있습니다.
    throw new Error('모든 상품을 불러오는데 실패했습니다.');
  }
}
