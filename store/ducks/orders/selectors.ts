import { RootState } from "../../store";
import { OrderState } from "./contracts/state";

export const selectOrders = (state: RootState): OrderState => state.orders

export const selectOrdersItems = (state: RootState): OrderState['items'] => state.orders.items