import { axiosClient } from '../AxiosClient';
import { AllProductParameters, AllProductResponse } from './product.response';

export async function getAllProducts(
  parameters: AllProductParameters
): Promise<AllProductResponse> {
  try {
    const response = await axiosClient.get<AllProductResponse>('/api/article', {
      params: parameters,
    });
    return response.data;
  } catch (error) {
    throw new Error('모든 상품을 불러오는데 실패했습니다.');
  }
}
