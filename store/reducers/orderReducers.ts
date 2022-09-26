import { OrderType } from "../../utils/types"
import { CREATE_ORDER } from "../actions/orderActions"

type OrderAction = {
    type: string,
    order: OrderType
}

export const OrderReducer = (state = [], action: OrderAction) => {
    switch (action.type) {
        case CREATE_ORDER:
            console.log('order reducer')
            return [
                ...state,
                action.order
            ]
        default:
            return state
    }
}