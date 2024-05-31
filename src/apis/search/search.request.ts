interface SearchComponent {
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

export interface SearchRequest {
  data: SearchComponent[];
  page: number;
  size: number;
}
