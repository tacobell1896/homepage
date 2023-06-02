export interface Link {
    id: number;
    name: string;
    url: string;
    categoryId: number;
  }
  
export interface Category {
    id: number;
    name: string;
    links: Link[];
  }
  