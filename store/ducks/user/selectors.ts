import { RootState } from "../../store";
// import { CartState } from "./contracts/state";

export const selectUserState = (state: RootState) => state.user

export const selectUser = (state: RootState) => selectUserState(state).user
