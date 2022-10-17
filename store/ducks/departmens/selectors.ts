import { RootState } from "../../store";
import { DepartmentsState } from "./contracts/state";

export const selectDepatmentsState = (state: RootState): DepartmentsState => state.departments

export const selectDepartments = (state: RootState): DepartmentsState['departments'] => state.departments.departments
// export const selectDepartments = (state: RootState): DepartmentsState['departments'] => selectDepatmentsState(state).departments
