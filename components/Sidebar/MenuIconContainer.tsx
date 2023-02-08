import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface MenuItemProps {
    children: any,
    active?: boolean,
    tooltip?: string
}


const MenuIconContainer = ({children, active, tooltip}: MenuItemProps) => {
    const [displayTooltip, setDisplayTooltip] = useState(false)

    return (
        <div onMouseEnter={() => setDisplayTooltip(true)} onMouseLeave={() => setDisplayTooltip(false)} className={`w-[70px] h-[70px] flex items-center justify-center relative cursor-pointer rounded-lg ${active ? 'hover:bg-slate-300 bg-gradient-to-t from-[#EA9769] to-[#EA6969]' : 'hover:bg-slate-700'}`}>
            {children}
            {tooltip ? (
                <div className={`w-max min-w-[100px] h-[30px] px-3 py-2 ${displayTooltip ? 'flex' : 'hidden'} items-center justify-center rounded-sm bg-[white] text-[#EA6969] absolute top-[50%] left-[120%] translate-y-[-50%] z-[1000]`}>
                    {tooltip}
                </div>
            ) : null}
        </div>
    ) 
}

export default MenuIconContainer