import { ProductsActionsType, ProductsActions } from "./contract/actionsType"
import { ProductsState } from "./contract/state"
import pizzas from "../../../data/products/pizzas"
import burgers from "../../../data/products/burgers"
import drinks from "../../../data/products/drinks"


const initialProductsState: ProductsState = {
    // @ts-ignore
    items: [...pizzas, ...burgers, ...drinks]
}

export const productsReducer = (state = initialProductsState, action: ProductsActions) => {
    switch(action.type){
        case ProductsActionsType.ADD_PRODUCT:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case ProductsActionsType.UPDATE_PRODUCT:
            const productId = action.payload.id

            const filteredArr = state.items.filter((i) => {
                return i.id != productId
            })

            // const updaitedProduct = state.items.filter((i) => {
            //     return i.id == productId
            // })

            // updaitedProduct
            return {
                ...state,
                items: [action.payload, ...filteredArr]
            }
        default: 
            return state
    }
}