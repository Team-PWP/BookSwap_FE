import { axiosClient } from '../AxiosClient';
import { ProductSellRequest } from './sell.request';

export async function ProductSell(request: ProductSellRequest): Promise<void> {
  const formData = new FormData();
  const articleData = JSON.stringify(request.article);

  const articleInfo = new Blob([articleData], { type: 'application/json' });
  formData.append('article', articleInfo);

  // formData.append('image', request.images);
  request.images.forEach((file) => {
    formData.append('images', file);
  });

  console.log('formData:', ...formData);
  const productSell = await axiosClient.post('/api/article', formData, {
    headers: {
      'Content-Type': 'multipart/form-data', // article은 JSON 형식으로 보내기 위해 따로 설정
    },
  });
  return productSell.data;
}

// export async function ProductSell(request: ProductSellRequest): Promise<void> {
//   const productSell = await axiosClient.post('/api/article', { ...request });
//   console.log(productSell.data);
//   return productSell.data;
// }
