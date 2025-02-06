export interface IProductListItem {
  id: number;
  title: string;
  price: string;
  stock: number;
  image: string;
  vendor: string;
  productType: string;
  onClick?: () => void;
}
