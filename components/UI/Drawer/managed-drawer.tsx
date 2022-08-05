import Cart from "../../Cart/Cart";
import Drawer from "../Drawer/Drawer";
import { useRouter } from "next/router";
// import { getDirection } from "@utils/get-direction";
import { useUI } from "../../../contexts/ui.context";


const ManagedDrawer = () => {
	const { displayDrawer, closeDrawer } = useUI();
	const { locale } = useRouter();

	// const dir = getDirection(locale);
	// const contentWrapperCSS = dir === "ltr" ? { right: 0 } : { left: 0 };
	return (
		<Drawer open={displayDrawer} onClose={closeDrawer}>
			<Cart />
		</Drawer>
	);
};

export default ManagedDrawer;
