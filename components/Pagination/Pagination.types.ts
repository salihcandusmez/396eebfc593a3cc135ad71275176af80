export interface IPagination {
  current: number;
  total: number;
  pageSize: number;
  onChange: (page: number) => void;
}
