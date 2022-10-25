export type ProductType = {
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    img: string, 
    // quantity: number
  };

export type OrderStatus = 'NEW' | 'PREPARATION' | 'DELIVERY' | 'DONE' | 'REJECTED'

// export type OrderType = {
//   items: ProductType[],
//   total_price: number,
//   order_id: number,
//   date: number,
//   status: OrderStatus,
//   delivery: boolean,
//   deliveryCoordinates: LatLngLiteral | undefined,

// }
export type OrderType = {
  items: ProductType[],
  total_price: number,
  order_id: number,
  date: number,
  status: OrderStatus,
  delivery: {
    isDelivery: boolean,
    deliveryPlaceTitle: string,
    deliveryCoordinates: LatLngLiteral | undefined,
  },
}


export type LatLngLiteral = google.maps.LatLngLiteral
export type DirectionsResult = google.maps.DirectionsResult
export type MapOptions = google.maps.MapOptions


