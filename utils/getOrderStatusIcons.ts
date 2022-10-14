// icons
import {RiUserFill, RiCarFill, RiEBike2Fill} from 'react-icons/ri'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {MdOutlineFiberNew, MdOutlinePendingActions, MdDoneOutline, MdCancel} from 'react-icons/md'

import { OrderStatus } from '../store/ducks/orders/contracts/state'

const NEW = OrderStatus.NEW
const PREPARATION = OrderStatus.PREPARATION
const DELIVERY = OrderStatus.DELIVERY
const DONE = OrderStatus.DONE
const REJECTED = OrderStatus.REJECTED

const getOrderStatusIcon = {
    NEW : `<div className=' bg-[#ffea2d48] rounded p-[5px]'><RiCarFill size={20} /></div> `
}



            //   `<div className=' bg-[#ffea2d48] rounded p-[5px]'>
            //     <RiCarFill size={20} />
            //   </div> `
            //   `<div className=' bg-[#ffea2d] rounded p-[5px]'>
            //     <RiEBike2Fill size={20} />
            //   </div>`
            //   `<div className=' bg-[#e62dff] rounded p-[5px]'>
            //     <MdOutlinePendingActions size={20} />
            //   </div>`
            //   `<div className=' bg-[#2dd5ff] rounded p-[5px]'>
            //     <MdDoneOutline size={20} />
            //   </div>`
            //   `<div className=' bg-[#2dff2d] rounded p-[5px]'>
            //     <MdOutlineFiberNew size={20} />
            //   </div>`
            //   `<div className=' bg-[#ff4d4d] rounded p-[5px]'>
            //     <MdCancel size={20} />
            //   </div>` 

export default getOrderStatusIcon