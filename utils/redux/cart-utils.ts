import { ProductType } from "../types";

export function addItemWithQuantity(
    items: ProductType[],
    item: ProductType,
    quantity: number
  ) {
    if (quantity <= 0)
      throw new Error("cartQuantity can't be zero or less than zero");
    const existingItemIndex = items.findIndex(
      (existingItem) => existingItem.id === item.id
    );
  
    if (existingItemIndex > -1) {
      const newItems = [...items];
      newItems[existingItemIndex].quantity! += quantity;
      return newItems;
    }
    return [...items, { ...item, quantity }];
  }
  