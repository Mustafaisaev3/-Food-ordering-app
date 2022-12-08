export interface Product {
    id: string,
    title: string,
    description: string,
    price: string,
    category: string,
    img: string, 
}
import { ProductType } from "../../../../utils/types"

export interface ProductsState {
    items: ProductType[]
}