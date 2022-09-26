export const CREATE_ORDER = 'CREATE_ORDER'

import { OrderType } from "../../utils/types"

export const createOrder = (order: OrderType) => {
    console.log(order);
    
    return {
        type: CREATE_ORDER,
        order: order
    }
}