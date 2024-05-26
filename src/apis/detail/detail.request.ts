export interface detailInfoRequest {
  title: string;
  content: string;
  buyoutPrice: number;
  minPrice: number;
  createdAt: string;
  bidStartAt: string;
  bidEndAt: string;
  imageUrls: File[];
  articleId: number;
  pageNumber: number;
}

export interface productSellerIdRequest {
  userId: number;
  sellerId: number;
}
