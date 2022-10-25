import { LatLngLiteral } from "../../../utils/types"
import { Product } from "../products/contract/state"
import { 
    OrdersActionsType, 
    SetOrderActionInterface, 
    SetOrderStatusActionInterface, 
    AddProductToOrderActionInterface, 
    DeleteOrderActionInterface, 
    DeleteProductFromOrderActionInterface, 
    UpdateProductInOrderActionInterface,
    UpdateOrderDeliveryLocationActionInterface,
    UpdateClientPhoneNumberActionInterface,
    UpdateClientInitialsActionInterface 
} from "./contracts/actionsType"

import { OrderState, OrderStatus } from "./contracts/state"

export const addOrder = (payload: OrderState['items']): SetOrderActionInterface => ({
    type: OrdersActionsType.SET_ORDER,
    payload
})

export const deleteOrder = (payload: number): DeleteOrderActionInterface => ({
    type: OrdersActionsType.DELETE_ORDER,
    payload
})

export const SetOrderStatus = (payload: {id: number, orderStatus: OrderStatus}): SetOrderStatusActionInterface => ({
    type: OrdersActionsType.SET_ORDER_STATUS,
    payload
})

export const addProductToOrder = (payload: {id: number, product: Product}): AddProductToOrderActionInterface => ({
    type: OrdersActionsType.ADD_PRODUCT_TO_ORDER,
    payload
})

export const updateProductInOrder = (payload: {id: number, product: Product}): UpdateProductInOrderActionInterface => ({
    type: OrdersActionsType.UPDATE_PRODUCT_IN_ORDER,
    payload
})

export const deleteProductFromOrder = (payload: {id: number, productId: string}): DeleteProductFromOrderActionInterface => ({
    type: OrdersActionsType.DELETE_PRODUCT_FROM_ORDER,
    payload
})

export const updateOrderDeliveryLocation = (payload: {id: number, delivery: { isDelivery: boolean, deliveryPlaceTitle: string, deliveryCoordinates: LatLngLiteral | undefined }}): UpdateOrderDeliveryLocationActionInterface => ({
    type: OrdersActionsType.UPDATE_ORDER_DELIVERY_LOCATION,
    payload
})

export const updateClientPhoneNumber = (payload: {id: number, phoneNumber: number}): UpdateClientPhoneNumberActionInterface => ({
    type: OrdersActionsType.UPDATE_CLIENT_PHONE_NUMBER,
    payload
})

export const updateClientInitials = (payload: {id: number, clientInitials: string}): UpdateClientInitialsActionInterface => ({
    type: OrdersActionsType.UPDATE_CLIENT_INITIALS,
    payload
})

