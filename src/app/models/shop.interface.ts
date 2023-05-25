export interface Shop {
    _id: string;
    name: string;
    goods: Product[];
}

export interface Product {
    name: string;
    price: number;
    quantity: number;
}

export interface Order {
  _id?: string;
  email: string;
  phoneNumber: string;
  address: string;
  products: Product[];
}
