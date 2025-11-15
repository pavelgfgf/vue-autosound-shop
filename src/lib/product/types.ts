// types/index.ts
export interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  oldPrice: number | null;
  brand: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  images: string[];
  features: Record<string, string>;
  description: string;
  shortDescription: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: number;
  name: string;
  slug: string;
}

export interface Brand {
  id: number;
  name: string;
  logo: string;
  productCount: number;
}

