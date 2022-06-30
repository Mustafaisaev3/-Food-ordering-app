import Image from 'next/image'
import React from 'react'

type ImageProps = {
    image_src: string
}


function Product(props: ImageProps) {

  return (
    <div className='w-[250px] h-[350px] relative cursor-pointer' onClick={() => console.log('hello')}>
        <div className='absolute bottom-0 left-0 z-1 w-[100%] h-[80%] bg-[#252836] rounded-lg '>
        </div>
        <div className='w-[100%] h-[auto] flex flex-col items-center justify-center relative z-10'>
            <Image src={props.image_src} height={200} width={200}/>
            <div className='w-[100%] h-auto p-[24px] text-center'>
                <h2 className='text-[white] text-center'>Spicy seasoned seafood noodles</h2>
                <div className='text-[white] my-[5px]'>$ 2.5</div>
                <p className='text-slate-400'>20 Bowls available</p>
            </div>
        </div>
    </div>
  )
}

export default Product