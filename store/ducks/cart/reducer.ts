import { LoadingStatus } from "../../types";
import { CartActions, CartActionsType } from "./contracts/actionsType";
import { CartState } from "./contracts/state";

const initialState: CartState = {
    items: [],
    totalprice: 0,
    status: LoadingStatus.NEVER
}

export const cartReducer = (state = initialState, action: CartActions) => {
    const item = action.item

    switch(action.type) {
        case CartActionsType.ADD_TO_CART:    
          console.log(action)
          item.quantity = action.quantity 

          if (state.items.length > 0){
            let filteredItemsArr = state.items.filter((e) => {
                return e.id != item.id
            })
            return {...state, items: [...filteredItemsArr, item]}
          } else {
            return {...state, items: [...state.items, item]}
          };

        case CartActionsType.DELETE_FROM_CART:
            let filteredItemsArr = state.items.filter((e) => {
                return e.id != item.id
            })
            return {...state, items: [...filteredItemsArr]}

        case CartActionsType.INCREASE_CART:   
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
            return state
            break
    }
}