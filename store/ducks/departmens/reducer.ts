import { DepartmentActions, DepartmentActionsType } from "./contracts/actionsType"
import { DepartmentsState } from "./contracts/state"
import { departments } from "../../../data/departments/departments"


const initialState: DepartmentsState = {
    departments: [...departments],
    activeDepartment: departments[0] 
}

export const departmentReducer = (state = initialState, action: DepartmentActions) => {
    switch(action.type) {
        case DepartmentActionsType.ADD_DEPARTMENT:
            return {
                ...state,
                departments: [action.payload]
            }
        case DepartmentActionsType.UPDATE_DEPARTMENT:
            const filteredUpdateArr = state.departments.filter((e) => {
                return e.id !== action.payload.id
            })
            return {
                ...state,
                departments: [action.payload ,...filteredUpdateArr]
            }
        case DepartmentActionsType.DELETE_DEPARTMENT:
            const filteredDeleteItemArr = state.departments.filter((e) => {
                return e.id !== action.payload
            })
            return {
                ...state,
                departments: [...filteredDeleteItemArr]
            }
        case DepartmentActionsType.SET_ACTIVE_DEPARTMENT:
            const activeDepartment = state.departments.filter((i) => {
                return i.id === action.payload
            })
            console.log(activeDepartment)
            return {
                ...state,
                activeDepartment: activeDepartment[0]
            }
        default: 
            return state
    }
}