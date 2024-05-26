// export interface ProductInfoProps = {
//   Title: String;
//   Img: File[];
//   BuyoutPrice: Number;
//   Time: String;
//   date: String;
// };

export interface ProductInfoProps {
  Title: string;
  Img: File[];
  BuyoutPrice: string;
  Time: string;
  date: string;
}

export interface ProductBidProps {
  minPrice: number;
  bidTime: string;
  // articleId: string;
  // bidPrice: number;
}
