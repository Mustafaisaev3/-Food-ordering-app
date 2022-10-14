export type ProductType = {
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    img: string, 
    // quantity: number
  };

export type OrderStatus = 'new' | 'preparation' | 'delivery' | 'done' | 'rejected'

export type OrderType = {
  items: ProductType[],
  total_price: number,
  order_id: number,
  date: number,
  status: OrderStatus
}