export interface ACFResponse {
  excerpt?: string;
  featured_image?: ACFFeaturedImage;
}

export interface ACFFeaturedImage {
  id: number;
  title: string;
  filename: string;
  url: string;
  alt?: string;
  author: string;
  description?: string;
  caption?: string;
  name: string;
  date: string;
  modified: string;
  mime_type: string;
  type: string;
  icon: string;
  width: number;
  height: number;
  sizes: {
    [key: string]: string | number;
  };
}
