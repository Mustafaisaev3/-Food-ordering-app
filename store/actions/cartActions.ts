import { ProductType } from "../../utils/types"
export const ADD_TO_CART = 'ADD_TO_CART'
export const INCREASE_CART = 'INCREASE_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'

export const addToCart = (item: ProductType, quantity: number) => {
    return {
        type: ADD_TO_CART,
        item,
        quantity
    }
}
export const increaseCart = (item: ProductType, quantity: number) => {
    return {
        type: INCREASE_CART,
        item,
        quantity
    }
}
export const deleteFromCart = (item: ProductType) => {
    return {
        type: DELETE_FROM_CART,
        item,
    }
}