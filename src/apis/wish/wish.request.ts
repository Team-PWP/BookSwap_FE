interface WishlistComponent {
  wishId: number;
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

export interface wishlistRequest {
  data: WishlistComponent[];
  page: number;
  size: number;
}
