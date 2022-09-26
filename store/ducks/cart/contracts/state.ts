import { ProductType } from "../../../../utils/types";
import { LoadingStatus } from "../../../types";

export interface CartState {
    items: ProductType[],
    totalprice: number,
    status: LoadingStatus
}