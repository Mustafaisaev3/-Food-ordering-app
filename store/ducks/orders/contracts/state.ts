import { LatLngLiteral, OrderType, ProductType } from "../../../../utils/types"
import { LoadingStatus } from "../../../types"

export enum OrderStatus {
    NEW = 'NEW',
    PREPARATION = 'PREPARATION',
    DELIVERY = 'DELIVERY',
    DONE = 'DONE',
    REJECTED = 'REJECTED'
}

// export type Order = {
//     items: ProductType[],
//     total_price: number,
//     order_id: number,
//     date: number,
//     status: OrderStatus,
//     delivery: boolean,
//     deliveryCoordinates: LatLngLiteral | undefined,
// }
// export type Order = {
//     items: ProductType[],
//     total_price: number,
//     order_id: number,
//     date: number,
//     status: OrderStatus
// }

export interface OrderState {
    items: OrderType[],
    status: LoadingStatus
}
