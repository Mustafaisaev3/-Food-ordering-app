import React, { useState } from "react";
import { useUI } from "../../contexts/ui.context";
import {motion} from 'framer-motion'
import { useDispatch } from "react-redux";
import { animationVariants } from "../../utils/motion/size-animation-variants";
import Counter from "../Common/Counter";
import { increaseCart, addToCart } from "../../store/ducks/cart/action";


export default function ProductPopup() {
	const dispatch = useDispatch()

	const {
		modalData: { data },
		closeModal,
		openCart,
		addToast
	} = useUI();

	const [size, setSize] = useState<string>('s')

	const [count, setCount] = useState(1)
	const onIncrease = () => {
		setCount(count + 1)
	}
	const onDecrease = () => {
		setCount(count - 1)
	}

	const handleAddToCartBtn = () => {
		dispatch(addToCart({...data}, count))
		addToast({id: Math.random(), toastType: 'success', text: `Товар добавлен в корзину: ${data.title}`})
	}
	
	return (
		<div className="rounded-lg bg-[#393C49] w-full h-full sm:w-full sm:h-[550px] md:w-[800px] md:h-[550px] lg:w-[1000px] lg:h-[600px]">
			<div className="flex flex-col sm:flex-row w-[100%] h-full overflow-hidden">
				<div className="flex items-center justify-center min-h-[300px] w-full h-[100%] md:w-[70%]` bg-[#252836]">
					<div className="w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]">
						<motion.img
							src={data.img}
							className="lg:object-cover"
							// @ts-ignore
							initial={animationVariants[size].from}
							// @ts-ignore
							animate={animationVariants[size].to}
						/>
					</div>
				</div>
				<div className="w-full px-[20px] py-[10px] sm:p-[20px] md:p-[20px] lg:p-[30px]"> 
					<h2 className="text-white text-[20px] sm:text-[20px] md:text-[20px] lg:text-[25px] pb-[15px] font-bold">Large burger</h2>
					<div className="description text-white text-[15px] sm:text-[15px] md:text-[15px] lg:text-[18px] pb-[15px]">Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem</div>
					<div className="flex items-center pb-[20px]">
						<div className="text-[20px] sm:text-[20px] md:text-[20px] lg:text-[25px] text-white font-bold">$ 11.50</div>
						<div className="text-[18px] sm:text-[15px] md:text-[15px] lg:text-[18px] text-slate-300 ml-[10px] line-through">$ 15.50</div>
					</div>
					<div className="pb-[15px] sm:pb-[15px] md:pb-[18px] lg:pb-[20px]">
						<div className="text-[18px] sm:text-[15px] md:text-[15px] lg:text-[18px] text-white pb-[10px]">Size</div>
						<div className="flex items-center gap-6">
							<div className="flex items-center justify-center w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] sm:text-[20px] md:text-[20px] lg:text-[25px] text-[15px] font-bold bg-[#252836] text-[#EA6969] rounded-md cursor-pointer" onClick={() => setSize('s')}>S</div>
							<div className="flex items-center justify-center w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] sm:text-[20px] md:text-[20px] lg:text-[25px] text-[15px] font-bold bg-[#252836] text-[#EA6969] rounded-md cursor-pointer" onClick={() => setSize('m')}>M</div>
							<div className="flex items-center justify-center w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] sm:text-[20px] md:text-[20px] lg:text-[25px] text-[15px] font-bold bg-[#252836] text-[#EA6969] rounded-md cursor-pointer" onClick={() => setSize('l')}>L</div>
						
						</div>
					</div>
					<div className="pb-[20px] sm:pb-[20px] md:pb-[30px] lg:pb-[50px]">
						<div className="text-[18px] sm:text-[15px] md:text-[15px] lg:text-[18px] text-white pb-[10px]">Extras</div>
						<div className="flex items-center gap-6">
							<div className="flex items-center justify-center w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px] lg:w-[80px] lg:h-[80px] p-[10px] bg-[#252836] text-[#EA6969] rounded-md cursor-pointer">
								<img src="/assets/images/products/drink/pepsi.png" alt="" />
							</div>
							<div className="flex items-center justify-center w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px] lg:w-[80px] lg:h-[80px] p-[10px] bg-[#252836] text-[#EA6969] rounded-md cursor-pointer">
								<img src="/assets/images/products/drink/fanta_apels.png" alt="" />
							</div>
							<div className="flex items-center justify-center w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px] lg:w-[80px] lg:h-[80px] p-[10px] bg-[#252836] text-[#EA6969] rounded-md cursor-pointer">
								<img src="/assets/images/products/drink/cola_red.png" alt="" />
							</div>
						</div>
					</div>
					<div className="flex flex-col md:flex-row gap-3 items-center justify-between">
						<Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
						<div className="w-full h-[50px] sm:h-[50px] md:h-[50px] lg:h-[60px] p-[20px] text-white text-sm md:text-base lg:text-base text-center rounded-md bg-[#EA6969] cursor-pointer" onClick={handleAddToCartBtn}>Add to cart</div>
					</div>
					{/* <div className="p-[20px] mx-[20px] bg-white rounded-md cursor-pointer" onClick={() => setSize('s')}>s</div>
					<div className="p-[20px] mx-[20px] bg-white rounded-md cursor-pointer" onClick={() => setSize('m')}>m</div>
					<div className="p-[20px] mx-[20px] bg-white rounded-md cursor-pointer" onClick={() => setSize('xl')}>xl</div> */}
				</div>
			</div>
		</div>
	);
}
