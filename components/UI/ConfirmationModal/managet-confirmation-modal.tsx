import { useUI } from "../../../contexts/ui.context";
import ConfirmationModal from "./ConfirmationModal";
import MainView from "./ConfirmationModalViews/MainView";



const ManagedConfirmationModal: React.FC = () => {
	const { displayConfirmationModal, closeConfirmationModal, confirmationModalView } = useUI();
	return (
		<ConfirmationModal open={displayConfirmationModal} onClose={closeConfirmationModal}>
			{confirmationModalView === "CONFIRMATION_MODAL_VIEW" && <MainView />}
		</ConfirmationModal>
	);
};

export default ManagedConfirmationModal;
