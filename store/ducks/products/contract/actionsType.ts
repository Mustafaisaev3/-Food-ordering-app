import { Action } from "redux";
import { Product } from "./state";

export enum ProductsActionsType {
    ADD_PRODUCT = 'products/ADD_PRODUCT',
    DELETE_PRODUCT = 'products/DELETE_PRODUCT',
    UPDATE_PRODUCT = 'products/UPDATE_PRODUCT',
}


export interface addProductActionInterface extends Action<ProductsActionsType> {
    type: ProductsActionsType,
    payload: Product
}

export interface updateProductActionInterface extends Action<ProductsActionsType> {
    type: ProductsActionsType,
    payload: Product
}

export type ProductsActions = addProductActionInterface | updateProductActionInterface