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
