import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import MenuCategoriesItem from './MenuCategoriesItem'

import categoryList from '../../data/categories/category-list'

import {GiHamburger} from 'react-icons/gi'
import {FaPizzaSlice} from 'react-icons/fa'
import {BiDrink} from 'react-icons/bi'

import { useDispatch } from 'react-redux'


function MenuCategories ({setActive}: {setActive: any}) {

    const [activeCat, setActiveCat] = useState<string>('all')
    setActive(activeCat)

    useEffect(() => {
        // dispatch(Actions.SelectCetegory(Actions.SELECT_CATEGORY, activeCat))
        
    }, [activeCat])

    return <div className='py-[24px]'>
        <div className='text-white text-[25px] py-[15px] md:text-[40px]'>Menu Categories</div>
            <div className='flex overflow-auto sm:overflow-x-scroll md:overflow-x-scroll lg:overflow-auto scrollbar-none'>
                {categoryList.map((e) => {
                    return (
                        <MenuCategoriesItem activeCategory={setActiveCat} category={e.name} isActive={activeCat==e.name}>
                            {/* <Image src={e.logo} width={50} height={50} className='color-white'/> */}
                            <img src={e.logo} className='color-white w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]'/>
                            <div className='text-white py-[8px] text-xs sm:text-[18px]'>{e.name}</div>
                        </MenuCategoriesItem>
                    )       
                })}
            </div>
        </div>
}


export default MenuCategories