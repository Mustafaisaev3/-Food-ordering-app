import { ProductType } from "../../../utils/types"
import { AddToCartActionInterface, CartActionsType, ClearCartActionInterface, DeleteFromCartActionInterface, IncreaseCartActionInterface } from "./contracts/actionsType"


export const addToCart = (item: ProductType, quantity: number): AddToCartActionInterface => {
    return {
        type: CartActionsType.ADD_TO_CART,
        item,
        quantity
    }
}
export const increaseCart = (item: ProductType, quantity: number): IncreaseCartActionInterface => {
    return {
        type: CartActionsType.INCREASE_CART,
        item,
        quantity
    }
}
export const deleteFromCart = (item: ProductType): DeleteFromCartActionInterface => {
    return {
        type: CartActionsType.DELETE_FROM_CART,
        item,
    }
}

export const clearCart = (): ClearCartActionInterface => {
    return {
        type: CartActionsType.CLEAR_CART
    }
}