export interface bidRequest {
  page: number;
  size: number;
  articles: number;
  price: number;
  bidId: number;
  data: Bid[];
}

export interface Bid {
  bidId: number;
  articleId: number;
  userNickname: string;
  price: number;
  bidTime: string;
}
