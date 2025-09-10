export interface Product {
    _id: string;
    shopId: string;
    name: string;
    price: number;
    imageUrl: string;
}

export interface CartItem extends Product {
    quantity: number;
}
