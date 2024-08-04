export interface Occurrence {
  id: string;
  title: string;
  description: string;
  status: string;
  files: any[];
  zipCode: string;
  latitude: number;
  longitude: number;
  createdAt: string;
  updatedAt: string;
  userId: string;
  categoryId: string;
}
