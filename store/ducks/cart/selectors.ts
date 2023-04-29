import { RootState } from "../../store";
import { CartState } from "./contracts/state";

export const selectCart = (state: RootState) => state.cart

export const selectCartItems = (state: RootState) => state.cart.items

export const selectCartItemsCount = (state: RootState) => state.cart.items.length

export const selectCartTotalpice = (state: RootState) => state.cart.totalprice