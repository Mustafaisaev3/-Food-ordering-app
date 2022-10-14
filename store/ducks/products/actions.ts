import { addProductActionInterface, updateProductActionInterface, ProductsActionsType } from "./contract/actionsType";
import { Product } from "./contract/state";


export const AddProduct = (payload: Product): addProductActionInterface => ({
    type: ProductsActionsType.ADD_PRODUCT,
    payload
})

export const UpdateProduct = (payload: Product): updateProductActionInterface => ({
    type: ProductsActionsType.UPDATE_PRODUCT,
    payload
})