import { RootState } from "../../store";
import { ProductsState } from "./contract/state";

export const selectProducts = (state: RootState): ProductsState => state.products

export const selectProductsItems = (state: RootState): ProductsState['items'] => state.products.items