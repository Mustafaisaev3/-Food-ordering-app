import React, { useRef, useState } from 'react'
import { HiOutlineSelector, HiCheck } from "react-icons/hi";
import useOnClickOutside from '../../utils/use-click-outside';

interface ListBoxInterface {
    title?: string,
    children?: any,
    onSelectOption?: (item: any) => void
}

const ListBox = ({ title, onSelectOption, children }: ListBoxInterface) => {
  const [activeOptionsItemTitle, setActiveOptionsItemTitle] = useState(title)
  const [openDropdown, setOpenDropdown] = useState(false)

  //Handle ouside click
  const optionsDropdownRef = useRef(null)
  // @ts-ignore
  useOnClickOutside(optionsDropdownRef, () => setOpenDropdown(false))

//   const handleSelectOption = (item: Option) => {
//     if (item) {
//         onSelectOption(item)
//         setActiveOptionsItemTitle(item.value)
//         setOpenDropdown(false)
//     }
//   }

  const handleDroprdownTitleClick = (e: any) => {
    e.stopPropagation()
    setOpenDropdown(!openDropdown)
  }

  return (
    <div className='listbox-container relative z-[1000000000]'>
        <div className='listbox-header flex items-center justify-between px-3 py-2 bg-[#434961] rounded-md' onClick={(e) => handleDroprdownTitleClick(e) }>
            <div className='text-white text-base pr-5'>{activeOptionsItemTitle}</div>
            <HiOutlineSelector
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
            />
        </div>
        {openDropdown &&
            <div ref={optionsDropdownRef} className='overflow-hidden absolute top-[45px] left-0 w-full h-auto bg-[#3e4359] rounded-md'>
                <ul>
                    { children }
                </ul>
            </div>
        }
    </div>
  )
}

export default ListBox

