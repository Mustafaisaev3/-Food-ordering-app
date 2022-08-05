import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import MenuCategoriesItem from './MenuCategoriesItem'

import categoryList from '../../data/categories/category-list'

import {GiHamburger} from 'react-icons/gi'
import {FaPizzaSlice} from 'react-icons/fa'
import {BiDrink} from 'react-icons/bi'

import * as Actions from '../../store/actions/SelectCategory'
import { useDispatch } from 'react-redux'


function MenuCategories ({setActive}: {setActive: any}) {

    const [activeCat, setActiveCat] = useState<string>('all')
    setActive(activeCat)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Actions.SelectCetegory(Actions.SELECT_CATEGORY, activeCat))
        
    }, [activeCat])

    return <div className='py-[24px]'>
        <div className='text-white text-[40px] py-[15px]'>Menu Categories</div>
        <div className='flex'>
        {categoryList.map((e) => {
            return <MenuCategoriesItem activeCategory={setActiveCat} category={e.name} isActive={activeCat==e.name}>
                <Image src={e.logo} width={50} height={50} className='color-white'/>
                <div className='text-white py-[8px]'>{e.name}</div>
            </MenuCategoriesItem>
        })}
        </div>

    </div>
}

// function MenuCategories() {
//   return (
//       <div className='py-[24px]'>
//         <div className='text-white text-[40px] py-[15px]'>Menu Categories</div>
//         <div className='flex'>
//             <MenuCategoriesItem>
//                 <GiHamburger color='white' className='h-[50px] w-[50px]' />
//                 <div className='text-white py-[8px]'>burger</div>
//             </MenuCategoriesItem>
//             <MenuCategoriesItem>
//                 <FaPizzaSlice color='white' className='h-[50px] w-[50px]' />
//                 <div className='text-white py-[8px]'>pizza</div>
//             </MenuCategoriesItem>
//             <MenuCategoriesItem>
//                 <Image src={'/assets/svg/png-drink.png'} width={50} height={50} className='color-white'/>
//                 <div className='text-white py-[8px]'>drink</div>
//                 {/* <Image src={'/assets/svg/beverage.svg'} width={20} height={20}/> */}
//             </MenuCategoriesItem>
//             <MenuCategoriesItem>
//                 <MailIcon color='white' className='h-[50px] w-[50px]' />
//             </MenuCategoriesItem>

//         </div>
//       </div>
//   )
// }

export default MenuCategories