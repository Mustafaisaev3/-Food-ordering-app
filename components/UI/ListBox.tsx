import React, { useRef, useState } from 'react'
import { HiOutlineSelector, HiCheck } from "react-icons/hi";
import useOnClickOutside from '../../utils/use-click-outside';

type Option = {
    id?: string;
	name: string;
    value?: any,
    logo?: string
};

interface ListBoxInterface {
    options: Option[],
    onSelectOption?: (item: any) => void
}

const ListBox = ({ options, onSelectOption, }: ListBoxInterface) => {
  const [activeOptionsItemTitle, setActiveOptionsItemTitle] = useState(options[0])
  const [openDropdown, setOpenDropdown] = useState(false)

  //Handle ouside click
  const optionsDropdownRef = useRef(null)
//   useOnClickOutside(optionsDropdownRef, () => setOpenDropdown(false))

  const handleSelectOption = (item: Option) => {
    if (item) {
        onSelectOption && onSelectOption(item)
        setActiveOptionsItemTitle(item)
        setOpenDropdown(false)
    }
  }

  return (
    <div className='listbox-container relative'>
        <div className='listbox-header flex items-center justify-between px-3 py-2 bg-[#252836] rounded-md' onClick={() => setOpenDropdown(!openDropdown)}>
            <div className='w-full min-w-[80px] flex items-center justify-between text-white pr-1'>
                {activeOptionsItemTitle.value}
                {activeOptionsItemTitle.logo && <img src={activeOptionsItemTitle.logo} className='w-[20px] h-[20px]'/>}
            </div>
            <HiOutlineSelector
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
            />
        </div>
        {openDropdown &&
            <div ref={optionsDropdownRef} className='overflow-hidden absolute top-[45px] left-0 w-full h-auto bg-[#252836] rounded-md'>
                <ul>
                    {options.map((item) => {
                        return <li className='flex justify-between p-2 cursor-pointer hover:bg-[#2f313ac1] text-white' onClick={() => handleSelectOption(item)}>
                            {item.value}
                            {item.logo && <img src={item.logo} className='w-[20px] h-[20px]'/>}
                        </li>
                    })}
                </ul>
            </div>
        }
    </div>
  )
}

export default ListBox

