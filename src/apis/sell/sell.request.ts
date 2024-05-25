export interface ProductSellRequest {
  article: {
    title: string;
    content: string;
    buyoutPrice: number;
    minPrice: number;
    bidStartAt: string;
    bidEndAt: string;
  };
  images: File[];
}
