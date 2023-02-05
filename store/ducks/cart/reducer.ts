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
          const newTotalPrice = state.totalprice + (item.quantity * item.price)
          console.log(newTotalPrice, item.quantity , item.price)

          if (state.items.length > 0){
            let filteredItemsArr = state.items.filter((e) => {
                return e.id != item.id
            })
            return {...state, items: [...filteredItemsArr, item], totalprice: newTotalPrice}
          } else {
            return {...state, items: [...state.items, item], totalprice: newTotalPrice}
          };

        case CartActionsType.DELETE_FROM_CART:
            let filteredItemsArr = state.items.filter((e) => {
                return e.id != item.id
            })
            return {...state, items: [...filteredItemsArr]}

        case CartActionsType.INCREASE_CART:   
            item.quantity = action.quantity 
            return state

        case CartActionsType.CLEAR_CART:   
            return {...state, items: [], totalprice: 0}

            // if (state.items.length > 0){
            //     let filteredItemsArr = state.items.filter((e) => {
            //         return e.id != item.id
            //     })

            //     let targetItemInCart = state.items.find((e) => {
            //         return e.id == item.id
            //     })

            //     if(targetItemInCart){
            //         targetItemInCart.quantity = targetItemInCart.quantity + action.quantity
            //         return {...state, items: [...filteredItemsArr, targetItemInCart]}
            //     } else {
            //         return {...state, items: [...state.items, item]}
            //     }
            // } else {
            //     return {...state, items: [...state.items, item]}
            // };
        // case CartActionsType.INCREASE_CART:   
        //     item.quantity = action.quantity 

        //     if (state.items.length > 0){
        //         let filteredItemsArr = state.items.filter((e) => {
        //             return e.id != item.id
        //         })

        //         let targetItemInCart = state.items.find((e) => {
        //             return e.id == item.id
        //         })

        //         if(targetItemInCart){
        //             targetItemInCart.quantity = targetItemInCart.quantity + action.quantity
        //             return {...state, items: [...filteredItemsArr, targetItemInCart]}
        //         } else {
        //             return {...state, items: [...state.items, item]}
        //         }
        //     } else {
        //         return {...state, items: [...state.items, item]}
        //     };

        default:
            return state
            break
    }
}