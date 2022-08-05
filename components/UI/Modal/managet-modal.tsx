import { useUI } from "../../../contexts/ui.context";
import Modal from "./Modal";
import dynamic from "next/dynamic";
import ProductPopup from "../../Product/product-popup";


// const ProductPopup = dynamic(() => import("../../Product/product-popup"));
const ManagedModal: React.FC = () => {
	const { displayModal, closeModal, modalView } = useUI();
	return (
		// <Modal open={displayModal} onClose={closeModal}>
		<Modal open={displayModal} onClose={closeModal}>
			{/* {modalView === "PRODUCT_VIEW" && <ProductPopup />} */}
			{"PRODUCT_VIEW" === "PRODUCT_VIEW" && <ProductPopup />}
		</Modal>
	);
};

export default ManagedModal;
