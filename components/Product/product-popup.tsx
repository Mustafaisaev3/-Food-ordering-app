import React, { useState } from "react";
import { useUI } from "../../contexts/ui.context";
import {motion} from 'framer-motion'
import { useDispatch } from "react-redux";
import { increaseCart } from "../../store/actions/cartActions";
import { animationVariants } from "../../utils/motion/size-animation-variants";
import Counter from "../Common/Counter";


export default function ProductPopup() {
	const dispatch = useDispatch()

	const {
		modalData: { data },
		closeModal,
		openCart,
	} = useUI();

	const [size, setSize] = useState<string>('s')

	const [count, setCount] = useState(1)
	const onIncrease = () => {
		setCount(count + 1)
	}
	const onDecrease = () => {
		setCount(count - 1)
	}
	

	return (
		<div className="rounded-lg bg-[#393C49] w-[1000px] h-[600px]">
			<div className="flex flex-row w-[100%] h-full overflow-hidden">
				<div className="flex items-center justify-center w-[70%] h-[100%] bg-[#252836]">
					<div className="w-[300px] h-[300px]">
						<motion.img
							src={data.img}
							className="lg:object-cover"
							initial={animationVariants[size].from}
							animate={animationVariants[size].to}
						/>
					</div>
				</div>
				<div className="w-full p-[30px]"> 
					<h2 className="text-white text-[25px] pb-[20px] font-bold">Large burger</h2>
					<div className="description text-white pb-[20px]">Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem</div>
					<div className="flex items-center pb-[20px]">
						<div className="text-[25px] text-white font-bold">$ 11.50</div>
						<div className="text-[18px] text-slate-300 ml-[10px] line-through">$ 15.50</div>
					</div>
					<div className="pb-[20px]">
						<div className="text-[20px] text-white pb-[10px]">Size</div>
						<div className="flex items-center gap-6">
							<div className="flex items-center justify-center w-[50px] h-[50px] text-[18px] font-bold bg-[#252836] text-[#EA6969] rounded-md cursor-pointer" onClick={() => setSize('s')}>S</div>
							<div className="flex items-center justify-center w-[50px] h-[50px] text-[18px] font-bold bg-[#252836] text-[#EA6969] rounded-md cursor-pointer" onClick={() => setSize('m')}>M</div>
							<div className="flex items-center justify-center w-[50px] h-[50px] text-[18px] font-bold bg-[#252836] text-[#EA6969] rounded-md cursor-pointer" onClick={() => setSize('l')}>L</div>
						
						</div>
					</div>
					<div className="pb-[50px]">
						<div className="text-[20px] text-white pb-[10px]">Extras</div>
						<div className="flex items-center gap-6">
							<div className="flex items-center justify-center w-[80px] h-[80px] p-[10px] bg-[#252836] text-[#EA6969] rounded-md cursor-pointer">
								<img src="/assets/images/products/drink/pepsi.png" alt="" />
							</div>
							<div className="flex items-center justify-center w-[80px] h-[80px] p-[10px] bg-[#252836] text-[#EA6969] rounded-md cursor-pointer">
								<img src="/assets/images/products/drink/fanta_apels.png" alt="" />
							</div>
							<div className="flex items-center justify-center w-[80px] h-[80px] p-[10px] bg-[#252836] text-[#EA6969] rounded-md cursor-pointer">
								<img src="/assets/images/products/drink/cola_red.png" alt="" />
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
						<div className="w-[200px] h-[60px] p-[20px] text-white text-center rounded-md bg-[#EA6969] cursor-pointer" onClick={() => { 
							dispatch(increaseCart({...data}, count))
							// console.log('increase')
						}}>Add to cart</div>
					</div>
					{/* <div className="p-[20px] mx-[20px] bg-white rounded-md cursor-pointer" onClick={() => setSize('s')}>s</div>
					<div className="p-[20px] mx-[20px] bg-white rounded-md cursor-pointer" onClick={() => setSize('m')}>m</div>
					<div className="p-[20px] mx-[20px] bg-white rounded-md cursor-pointer" onClick={() => setSize('xl')}>xl</div> */}
				</div>
			</div>
		</div>
	);
}
