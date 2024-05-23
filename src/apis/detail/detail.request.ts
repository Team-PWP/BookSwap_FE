export interface detailInfoRequest {
  title: string;
  content: string;
  buyoutPrice: number;
  minPrice: number;
  createdAt: string;
  bidStartAt: string;
  bidEndAt: string;
  imageUrls: string[];
  articleId: number;
  pageNumber: number;
}
