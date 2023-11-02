
// export interface Product {
//     id?: number;
//     code?: string;
//     description?: string;
//     name?: string;
//     active?: boolean;
// }


export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}