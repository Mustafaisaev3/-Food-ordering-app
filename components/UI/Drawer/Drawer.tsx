import React, { FC, useRef, useEffect } from "react";
import Portal from "@reach/portal";
import { motion, AnimatePresence } from "framer-motion";
import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks,
} from "body-scroll-lock";
import cn from "classnames";
import { IoClose } from "react-icons/io5";
import { fadeInRight } from "../../../utils/motion/fade-in-right";
import { zoomOutIn } from "../../../utils/motion/zoom-out-in";
import { useUI } from "../../../contexts/ui.context";
import useOnClickOutside from "../../../utils/use-click-outside";

type DrowerProps = {
	open?: boolean;
	children?: React.ReactNode;
	onClose: () => void;
	rootClassName?: string;
	useBlurBackdrop?: boolean;
	containerClassName?: string;
	variant?: "center" | "bottom";
};
type DivElementRef = React.MutableRefObject<HTMLDivElement>;

// variant based classes for modal root, container & close btn
// const rootClasses = {
// 	center: "p-4 md:p-5",
// 	bottom: "p-5 pb-0",
// };
// const containerClasses = {
// 	center: "h-auto max-h-full top-1/2 -translate-y-1/2 rounded-lg",
// 	bottom: "h-full max-h-70vh bottom-0 rounded-ts-2xl rounded-te-2xl",
// };
// const closeBtnClasses = {
// 	center: "top-4 end-4",
// 	bottom: "top-1/4 start-1/2 transform -translate-y-1/2 -translate-x-1/2",
// };

const Drawer: FC<DrowerProps> = ({
	children,
	open,
	onClose,
	rootClassName,
	useBlurBackdrop,
	containerClassName,
	variant = "center",
}) => {
	const { closeDrawer } = useUI();
	const drawerRootRef = useRef() as DivElementRef;
	const drawerInnerRef = useRef() as DivElementRef;
	useOnClickOutside(drawerInnerRef, drawerRootRef, () => closeDrawer());

	useEffect(() => {
		if (drawerInnerRef.current) {
			if (open) {
				disableBodyScroll(drawerInnerRef.current);
			} else {
				enableBodyScroll(drawerInnerRef.current);
			}
		}
		return () => {
			clearAllBodyScrollLocks();
		};
	}, [open]);

	return (
		<Portal>
			<AnimatePresence>
				{open && (
					<motion.div
						ref={drawerRootRef}
						key="drawer"
						initial="from"
						animate="to"
						exit="from"
						variants={fadeInRight(0.50)}
						className={cn(
							"modal-root fixed bg-black bg-opacity-70 inset-0 z-50 backdrop-filter backdrop-blur-sm",
						)}
					>
						<motion.div
							initial="from"
							animate="to"
							exit="from"
							variants={zoomOutIn()}
							className="relative h-full mx-auto w-full"
						>
							<div
								className={cn(
									"w-full md:w-auto absolute right-0 shadow-xl",
								)}
							>
								<div
									ref={drawerInnerRef}
									className="overflow-y-auto h-full flex justify-between"
								>
									{children}
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</Portal>
	);
};

export default Drawer;
