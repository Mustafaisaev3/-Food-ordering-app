import { LoadingStatus } from "../../types"
// import { LoadingState } from "../../types"
import { OrdersActionsType } from "./contracts/actionsType"
import { OrdersActions } from "./contracts/actionsType"
import { OrderState } from "./contracts/state"

const initialOrderState: OrderState = {
    items: [],
    status: LoadingStatus.NEVER
}

export const orderReducer = (state = initialOrderState , action: OrdersActions) => {

    switch(action.type) {
        case OrdersActionsType.SET_ORDER:
            return {
                ...state,
                items: [...state.items, action.payload],
                status: LoadingStatus.LOADED
            }
            break

        case OrdersActionsType.DELETE_ORDER:
            const filteredOrders = state.items.filter((item) => {
                return item.order_id !== action.payload
            })
            return {
                ...state,
                items: [...filteredOrders],
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

        case OrdersActionsType.ADD_PRODUCT_TO_ORDER:
            const filterdOrders = state.items.filter((order) => {
                return order.order_id !== action.payload.id
            })

            // console.log(filterdOrders, 'filtered', action.payload.id)
            const targetAddOrder = state.items.filter((order) => {
                return order.order_id === action.payload.id
            })
            // console.log(targetOrder, 'target')

            targetAddOrder[0].items = [...targetAddOrder[0].items, action.payload.product]

            return {
                ...state,
                items: [...filterdOrders, targetAddOrder[0]],
                status: LoadingStatus.LOADED
            }
            break
        
        case OrdersActionsType.DELETE_PRODUCT_FROM_ORDER:
            const deleteActionFilteredOrder = state.items.filter((order) => {
                return order.order_id !== action.payload.id
            })

            const deleteActionTargetOrder = state.items.filter((order) => {
                return order.order_id === action.payload.id
            })

            deleteActionTargetOrder[0].items = deleteActionTargetOrder[0].items.filter((product) => {
                console.log(product.id, action.payload.productId)
                return product.id != parseInt(action.payload.productId)
            })

            const newOrderObj = Object.assign({}, deleteActionTargetOrder[0])

            return {
                ...state,
                items: [...deleteActionFilteredOrder, newOrderObj],
                status: LoadingStatus.LOADED
            }

        case OrdersActionsType.UPDATE_ORDER_DELIVERY_LOCATION:
            console.log(action.payload.delivery)
            const updateActionFilteredOrder = state.items.filter((order) => {
                return order.order_id !== action.payload.id
            })

            const updateActionTargetOrder = state.items.filter((order) => {
                return order.order_id === action.payload.id
            })

            updateActionTargetOrder[0].delivery = action.payload.delivery

            return {
                ...state,
                items: [...updateActionFilteredOrder, ...updateActionTargetOrder],
                status: LoadingStatus.LOADED
            }

        default:
            return state
            break

    }

}


