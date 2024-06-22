export interface IPost {
    _id: string;
    title: string;
    subtitle: string;
    author: string;
    content?: string;
    image: string;
    locationId?: string;
    createdAt?: string;
    updatedAt?: string;
  }