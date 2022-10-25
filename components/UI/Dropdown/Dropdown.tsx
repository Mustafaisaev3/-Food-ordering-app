import React, { useState, useRef } from 'react'
import useOnDropdownClickOutside from '../../../utils/useDropdownClickOutside'
import { HiOutlineSelector } from 'react-icons/hi'


const Dropdown = ({activeItem = 'Choose item', children}: {children?: any, activeItem?: any}) => {
  const [openDropdow, setOpenDropdow] = useState(false)

  //Handle ouside click
  const dropdownRef = useRef(null)
  useOnDropdownClickOutside(dropdownRef, () => setOpenDropdow(false))

  const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpenDropdow(!openDropdow)
  }

  return (
    <>
        <div onClick={(e) => handleDropdownClick(e)} className={'relative'}>
            <div className='listbox-header flex items-center justify-between px-3 py-2 bg-[#252836] rounded-md' >
                <div className='text-white pr-5'>{activeItem}</div>
                <HiOutlineSelector
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                />
            </div>
            {openDropdow && <div ref={dropdownRef} className='absolute bg-[#34384b] top-0 left-2 overflow-hidden rounded-md w-auto'>
                {children}
            </div>
        }
        </div>
    </>
  )
}

export default Dropdown