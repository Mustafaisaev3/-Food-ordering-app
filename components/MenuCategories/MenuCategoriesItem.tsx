import React, {useState} from 'react'

type MenuCategoriesItemType = {
  children?: any,
  activeCategory: any,
  category: string,
  isActive: boolean
}

function MenuCategoriesItem({children, activeCategory, category, isActive}: MenuCategoriesItemType) {
    return (
        <div onClick={() => { activeCategory(category)}} className={`rounded-lg flex flex-col items-center justify-center w-[80px] h-[120px] bg-[#252836] cursor-pointer mr-[20px] ${isActive ? 'hover:bg-slate-300 bg-gradient-to-t from-[#EA9769] to-[#EA6969]' : 'hover:bg-slate-700'}`}>
          {children}
        </div>
    ) 
}

export default MenuCategoriesItem