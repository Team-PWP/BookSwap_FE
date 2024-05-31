interface myStoreLog {
  articleId: number;
  sellerId: number;
  userNickname: string;
  title: string;
  buyoutPrice: number;
  minPrice: number;
  createdAt: string;
  bidStartAt: string;
  bidEndAt: string;
  imageUrl: string[];
}
export interface myStoreRequest {
  data: myStoreLog[];
  page: number;
  size: number;
  userId: number;
}
