import { RootState } from "../../store";
import { ProductsState } from "./contract/state";

export const selectProducts = (state: RootState): ProductsState => state.products

export const selectProductsItems = (state: RootState): ProductsState['items'] => state.products.items

export const selectProductsItemsByCategory = (state: RootState, category: string): ProductsState['items'] => category == 'all' ? state.products.items : state.products.items.filter((product: any) => product.category == category)