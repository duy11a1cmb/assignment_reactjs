export interface DetailUser {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  address: any;
  phone: string;
  website: string;
  company: any;
}

export interface FilterTable {
  query: string;
  sort: string;
  currentPage: number;
  totalPages: number;
  numberPerPage: number;
}
