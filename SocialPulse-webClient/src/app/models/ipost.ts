export interface IPost {
  id: number;
  userName: string;
  content: string;
  filePath: string;
  createdDate: Date;
  comments: Comment[];
}
