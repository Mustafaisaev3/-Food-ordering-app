import { DepartmentActions, DepartmentActionsType } from "./contracts/actionsType"
import { DepartmentsState } from "./contracts/state"



const initialState: DepartmentsState = {
    departments: []
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
        default: 
            return state
    }
}