export type ProductType = {
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    img: string, 
    quantity: number
  };

export type OrderStatus = 'NEW' | 'PREPARATION' | 'DELIVERY' | 'DONE' | 'REJECTED'


export const OrderStatusArr = [
  {
    title: 'NEW',
    color: '#2dff2d58'
  },
  {
    title: 'PREPARATION',
    color: '#e62dff4d'
  },
  {
    title: 'DELIVERY',
    color: '#ffea2d48'
  },
  {
    title: 'DONE',
    color: '#2dd5ff54'
  },
  {
    title: 'REJECTED',
    color: '#ff4d4d43'
  },
]

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
  status: OrderStatus | string,
  delivery: {
    isDelivery: boolean,
    deliveryPlaceTitle: string,
    deliveryCoordinates: LatLngLiteral | undefined,
  },
}


export type LatLngLiteral = google.maps.LatLngLiteral
export type DirectionsResult = google.maps.DirectionsResult
export type MapOptions = google.maps.MapOptions


// User Type
export type UserType = {
  userName: string,
  bio: string,
  email: string,
  company: string,
  first_name: string,
  last_name: string,
  address: string,
  city: string,
  postal_code: string,
  country: string,
  about_me: string,
  password: string,
  website: string,
}

