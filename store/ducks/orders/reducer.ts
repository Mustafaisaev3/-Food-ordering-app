import { LoadingStatus } from "../../types"
// import { LoadingState } from "../../types"
import { OrdersActionsType } from "./contracts/actionsType"
import { OrdersActions } from "./contracts/actionsType"
import { OrderState } from "./contracts/state"

const initialUsersState: OrderState = {
    items: [],
    status: LoadingStatus.NEVER
}

export const orderReducer = (state = initialUsersState , action: OrdersActions) => {

    switch(action.type) {
        case OrdersActionsType.SET_ORDER:
            return {
                ...state,
                items: [...state.items, action.payload],
                status: LoadingStatus.LOADED
            }
            break
        case OrdersActionsType.SET_ORDER_STATUS:
            console.log('status')
            const filteredOrderArray = state.items.filter((e) => {
                return e.order_id !== action.payload.id
            })
            const chaingedStatusOrder = state.items.filter((e) => {
                return e.order_id === action.payload.id
            })
            chaingedStatusOrder[0].status = action.payload.orderStatus

            return {
                ...state,
                items: [...filteredOrderArray, ...chaingedStatusOrder],
                status: LoadingStatus.LOADED
            }
            break
        default:
            return state
            break

    }

}


