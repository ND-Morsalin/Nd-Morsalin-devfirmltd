export interface InvoiceType {
    id?: string;
    client: string;
    date:Date;
    trip: string;
    planeImage: string;

    products: ProductType[];
}

export interface ProductType {
    id?: string;
    name: string;
    price: number;
    productType: string;
    description: string;
}