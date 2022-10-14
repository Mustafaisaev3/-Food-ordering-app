import React, {useState} from 'react'
import { motion } from 'framer-motion'

type MenuItemProps = {
    children: any
}


const MenuIconContainer = ({children}: MenuItemProps) => {
    const [isActive, setActive] = useState<boolean>(false)

    return (
        // <div onClick={() => setActive(!isActive)} className={isActive ? `p-[10px] my-[30px] hover:bg-slate-300 cursor-pointer duration-150 rounded-lg bg-gradient-to-t from-[#EA9769] to-[#EA6969]` : `p-[10px] hover:bg-slate-700 cursor-pointer my-[30px] rounded-lg`}>
        <div onClick={() => setActive(!isActive)} className={`p-[10px] my-[15px] cursor-pointer rounded-lg ${isActive ? 'hover:bg-slate-300 bg-gradient-to-t from-[#EA9769] to-[#EA6969]' : 'hover:bg-slate-700'}`}>
            {children}
        </div>
    ) 
}

export default MenuIconContainer