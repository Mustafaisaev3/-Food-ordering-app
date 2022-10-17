import { addDepartmentActionInterface, deleteDepartmentActionInterface, DepartmentActionsType, updateDepartmentActionInterface } from "./contracts/actionsType";
import { Department } from "./contracts/state";


export const AddDepartment = (payload: Department): addDepartmentActionInterface => ({
    type: DepartmentActionsType.ADD_DEPARTMENT,
    payload
})

export const UpdateDepartment = (payload: Department): updateDepartmentActionInterface => ({
    type: DepartmentActionsType.UPDATE_DEPARTMENT,
    payload
})

export const DeleteDepartment = (payload: Department['id']): deleteDepartmentActionInterface => ({
    type: DepartmentActionsType.DELETE_DEPARTMENT,
    payload
})