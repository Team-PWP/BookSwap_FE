export interface ProductItemProps {
  ProductImg: string;
  price: number;
  time: string;
  title: string;
  onClick: () => void;
}

export interface ProductTypes {
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
