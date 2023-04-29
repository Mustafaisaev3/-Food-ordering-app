import { UserType } from "../../../../utils/types";
import { LoadingStatus } from "../../../types";

export interface UserState {
    user: UserType,
    status: LoadingStatus
}