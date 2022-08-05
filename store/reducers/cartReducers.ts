import { ProductType } from "../../utils/types";
import { ADD_TO_CART, INCREASE_CART, DELETE_FROM_CART } from "../actions/cartActions";

type Action = {
    type: string,
    item: ProductType,
    quantity: number
}

const initialState = {
    items: [],
    totalPrice: 0,
}

export const CartReducer = (state = initialState, action: Action) => {
    const item = action.item

    switch(action.type) {
        case ADD_TO_CART:    
        
          item.quantity = action.quantity 

          if (state.items.length > 0){
            let filteredItemsArr = state.items.filter((e) => {
                return e.id != item.id
            })
            return {...state, items: [...filteredItemsArr, item]}
          } else {
            return {...state, items: [...state.items, item]}
          };

        case DELETE_FROM_CART:
            let filteredItemsArr = state.items.filter((e) => {
                return e.id != item.id
            })
            return {...state, items: [...filteredItemsArr]}

        case INCREASE_CART:   
            item.quantity = action.quantity 

            if (state.items.length > 0){
                let filteredItemsArr = state.items.filter((e) => {
                    return e.id != item.id
                })

                let targetItemInCart = state.items.find((e) => {
                    return e.id == item.id
                })

                if(targetItemInCart){
                    targetItemInCart.quantity = targetItemInCart.quantity + action.quantity
                    return {...state, items: [...filteredItemsArr, targetItemInCart]}
                } else {
                    return {...state, items: [...state.items, item]}
                }
            } else {
                return {...state, items: [...state.items, item]}
            };

        default:
            return {...state}
    }
}