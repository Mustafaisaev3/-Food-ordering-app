export interface Product {
    id: string,
    title: string,
    description: string,
    price: string,
    category: string,
    img: string, 
}

export interface ProductsState {
    items: Product[]
}