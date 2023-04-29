import { useUI } from "../../../contexts/ui.context";
import Modal from "./Modal";
import ProductPopup from "../../Product/product-popup";
import OrderPopup from "../../Order/OrderPopup/OrderPopup";
import AddProductPopup from "../../ProductsManagement/AddProductPopup/AddProductPopup";
import UpdateProductPopup from "../../ProductsManagement/AddProductPopup/UpdateProduct";
import AddDepartmentPopup from "../../Departments/AddDepartmentPopup/AddDepartmentPopup";
import UpdateDepartmentPopup from "../../Departments/AddDepartmentPopup/UpdateDepartment";

const ManagedModal: React.FC = () => {
	const { displayModal, closeModal, modalView } = useUI();
	return (
		// <Modal open={displayModal} onClose={closeModal}>
		<Modal open={displayModal} onClose={closeModal}>
			{modalView === "PRODUCT_VIEW" && <ProductPopup />}
			{modalView === "ORDER_VIEW" && <OrderPopup />}
			{modalView === "ADD_PRODUCT_VIEW" && <AddProductPopup />}
			{modalView === "UPDATE_PRODUCT_VIEW" && <UpdateProductPopup />}
			{modalView === "ADD_DEPARTMENT_VIEW" && <AddDepartmentPopup />}
			{modalView === "UPDATE_DEPARTMENT_VIEW" && <UpdateDepartmentPopup />}
		</Modal>
	);
};

export default ManagedModal;
