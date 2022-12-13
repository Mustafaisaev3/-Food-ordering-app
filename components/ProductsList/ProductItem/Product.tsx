import Image from 'next/image'
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { useUI } from '../../../contexts/ui.context'


type ProductDataProps = {
    id: number,
    title: string,
    description: string,
    price: number,
    img: string
}


function Product({ data }: {data: ProductDataProps}) {

    const [isHover, setHover] = useState<boolean>(false)

    const { openModal, setModalView, setModalData } = useUI();


	function handlePopupView() {
		setModalData({ data: data });
		setModalView("PRODUCT_VIEW");
		return openModal();
	}

  return (
    <motion.div layout className='w-full h-auto flex justify-center' onClick={handlePopupView} id={`${data.id}`} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div className='w-full h-[350px] relative cursor-pointer'>
            <div className='absolute bottom-0 left-0 z-1 w-[100%] h-[80%] bg-[#252836] rounded-lg '>
            </div>
            <div className='w-[100%] h-[auto] flex flex-col items-center justify-center relative z-10'>
                <motion.div animate={isHover ? {rotate: [0, 20, 0 ,-20, 0]} : {}} transition={{duration: 0.3}} className="flex mb-3 md:mb-3.5">
                    <Image src={data.img} height={200} width={200} />
                </motion.div>
                <div className='w-[100%] h-auto p-[24px] text-center'>
                    <h2 className='text-[white] text-center'>{data.title}</h2>
                    <div className='text-[white] my-[5px]'>$ {data.price}</div>
                    <p className='text-slate-400'>20 Bowls available</p>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Product