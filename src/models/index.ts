export interface NewJoinUser {
  id: string;
  name: string;
  job: string;
  img: string;
}

export enum Status {
  Approved = "Approved",
  Rejected = "Rejected",
  Pending = "Pending",
}

export interface Customer {
  id: string;
  name: string;
  amount: number;
  status: Status;
  img: string;
  date: Date;
}

export interface TableData {
  id: string;
  name: string;
  age: string;
  status: string;
  img: string;
  email: string;
  transaction: number;
}

export interface ProductModel {
  productName: string;
  inStock: string;
  price?: number;
  active: string;
  pic?: File;
}

export interface ProductTableData {
  id: string;
  img: string;
  name: string;
  stock: number;
}
