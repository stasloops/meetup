export interface NewsData {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  newsImage?: string;
  newsType: {
    id: number;
    name: string;
  };
  newsStatus: {
    id: number;
    name: string;
  };
}
