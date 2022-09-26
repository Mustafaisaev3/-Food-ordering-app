import { useUI } from "../../../contexts/ui.context";
import Modal from "./Modal";
import ProductPopup from "../../Product/product-popup";
import OrderPopup from "../../Order/OrderPopup/OrderPopup";



// const ProductPopup = dynamic(() => import("../../Product/product-popup"));
const ManagedModal: React.FC = () => {
	const { displayModal, closeModal, modalView } = useUI();
	return (
		// <Modal open={displayModal} onClose={closeModal}>
		<Modal open={displayModal} onClose={closeModal}>
			{modalView === "PRODUCT_VIEW" && <ProductPopup />}
			{modalView === "ORDER_VIEW" && <OrderPopup />}
		</Modal>
	);
};

export default ManagedModal;
