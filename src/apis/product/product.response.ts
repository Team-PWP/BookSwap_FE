export interface AllProductResponse {
  hasNext: boolean;
  data: Product[];
}

export interface AllProductParameters {
  page: number;
  size: number;
}

export interface Product {
  articleId: number;
  userNickname: string;
  title: string;
  buyoutPrice: number;
  minPrice: number;
  createdAt: string;
  bidStartAt: string;
  bidEndAt: string;
  imageUrl: string[];
}
