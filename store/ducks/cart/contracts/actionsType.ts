import { Action } from "redux"
import { ProductType } from "../../../../utils/types"


export enum CartActionsType {
    ADD_TO_CART = 'cart/ADD_TO_CART',
    INCREASE_CART = 'cart/INCREASE_CART',
    CLEAR_CART = 'cart/CLEAR_CART',
    DELETE_FROM_CART = 'cart/DELETE_FROM_CART',
}

export interface AddToCartActionInterface extends Action<CartActionsType> {
    type: CartActionsType.ADD_TO_CART,
    item: ProductType,
    quantity: number
}

export interface IncreaseCartActionInterface extends Action<CartActionsType>{
    type: CartActionsType.INCREASE_CART,
    item: ProductType,
    quantity: number
}

export interface DeleteFromCartActionInterface extends Action<CartActionsType>{
    type: CartActionsType.DELETE_FROM_CART,
    item: ProductType,
}

export interface ClearCartActionInterface extends Action<CartActionsType>{
    type: CartActionsType.CLEAR_CART,
}



export type CartActions = AddToCartActionInterface |  IncreaseCartActionInterface | DeleteFromCartActionInterface | ClearCartActionInterface