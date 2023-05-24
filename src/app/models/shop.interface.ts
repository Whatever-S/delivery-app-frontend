export interface Shop {
    _id: string;
    name: string;
    goods: Good[];
}

export interface Good {
    name: string;
    price: number;
}