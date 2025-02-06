export interface IProductListItem {
  name: string;
  price: string;
  image: string;
  date?: string;
  onClick?: () => void;
}
