import { ProductsActionsType, ProductsActions } from "./contract/actionsType"
import { ProductsState } from "./contract/state"
import pizzas from "../../../data/products/pizzas"
import burgers from "../../../data/products/burgers"
import drinks from "../../../data/products/drinks"
import desserts from "../../../data/products/desserts"


const initialProductsState: ProductsState = {
    // @ts-ignore
    items: [...pizzas, ...burgers, ...drinks, ...desserts]
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