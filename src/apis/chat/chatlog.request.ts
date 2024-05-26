interface ChatLog {
  message: string;
  userid: number;
  nickname: string;
  createdAt: string;
}
export interface chatlogRequest {
  data: ChatLog[];
  page: number;
  size: number;
  chatRoomId: number;
}
