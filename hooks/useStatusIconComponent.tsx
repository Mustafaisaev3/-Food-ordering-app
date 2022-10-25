import {RiEBike2Fill} from 'react-icons/ri'
import {MdOutlineFiberNew, MdOutlinePendingActions, MdDoneOutline, MdCancel} from 'react-icons/md'


const useStatusIconComponent = () => {
    const statusIconComponent = {
      // NEW: <div className=' bg-[#ffea2d48] rounded p-[5px]'><RiCarFill size={20} /></div>,
      DELIVERY: <div className=' bg-[#ffea2d] rounded p-[5px]'><RiEBike2Fill size={20} /></div>,
      PREPARATION: <div className=' bg-[#e62dff] rounded p-[5px]'><MdOutlinePendingActions size={20} /></div>,
      DONE: <div className=' bg-[#2dd5ff] rounded p-[5px]'><MdDoneOutline size={20} /></div>,
      NEW: <div className=' bg-[#2dff2d] rounded p-[5px]'><MdOutlineFiberNew size={20} /></div>,
      REJECTED: <div className=' bg-[#ff4d4d] rounded p-[5px]'><MdCancel size={20} /></div>,
    }

    return {
        statusIconComponent
    }

}

export default useStatusIconComponent