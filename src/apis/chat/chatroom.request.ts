interface ChatRoomData {
  chatRoomId: number;
  articleId: number;
  title: string;
}

export interface chatroomlistRequest {
  data: ChatRoomData[];
  page: number;
  size: number;
}

export interface chatcreateRequest {
  articleId: number;
  buyer: number;
  seller: number;
  title: string;
}
