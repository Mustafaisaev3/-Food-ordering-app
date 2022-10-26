import { RootState } from "../../store";
import { AuthState } from "./contracts/state";

export const selectUserAuth = (state: RootState): AuthState => state.auth

export const selectIsUserAuth = (state: RootState): AuthState['isAuth'] => state.auth.isAuth