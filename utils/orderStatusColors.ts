type OrderStatusColorsType = {
    NEW : {
        textColor: string,
        bg: string
    },
    PREPARATION : {
        textColor: string,
        bg: string
    },
    DELIVERY : {
        textColor: string,
        bg: string
    },
    DONE : {
        textColor: string,
        bg: string
    },
    REJECTED : {
        textColor: string,
        bg: string
    },
  }

export const OrderStatusColors: OrderStatusColorsType = {
    NEW : {
        textColor: '#2dff2d',
        bg: '#2dff2d58'
    },
    PREPARATION : {
        textColor: '#e62dff',
        bg: '#e62dff4d'
    },
    DELIVERY : {
        textColor: '#ffea2d',
        bg: '#ffea2d48'
    },
    DONE : {
        textColor: '#2dd5ff',
        bg: '#2dd5ff54'
    },
    REJECTED : {
        textColor: '#ff4d4d',
        bg: '#ff4d4d43'
    },

}