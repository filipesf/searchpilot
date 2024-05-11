export type ProductType =
  | 'footwear'
  | 'activewear'
  | 'outerwear'
  | 'dress'
  | 'top'
  | '';

export type FootwearSizes = 'US 7' | 'US 8' | 'US 9' | 'US 10';

export type ClothingSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface Product {
  id?: string;
  name: string;
  sizes: FootwearSizes[] | ClothingSizes[];
  type: ProductType;
  features: string[];
  brand: string;
  style?: string;
  materials?: string;
  colour?: string;
  neckline?: string;
}

export type SelectValue = string | number | ProductType;
