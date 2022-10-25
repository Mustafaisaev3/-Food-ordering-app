import { Action } from "redux";
import { Department } from "./state";

export enum DepartmentActionsType {
    ADD_DEPARTMENT = 'department/ADD_DEPARTMENT',
    DELETE_DEPARTMENT = 'department/DELETE_DEPARTMENT',
    UPDATE_DEPARTMENT = 'department/UPDATE_DEPARTMENT',
    SET_ACTIVE_DEPARTMENT = 'department/SET_ACTIVE_DEPARTMENT',
}

export interface addDepartmentActionInterface extends Action<DepartmentActionsType> {
    type: DepartmentActionsType.ADD_DEPARTMENT,
    payload: Department
}

export interface updateDepartmentActionInterface extends Action<DepartmentActionsType> {
    type: DepartmentActionsType.UPDATE_DEPARTMENT,
    payload: Department
}

export interface deleteDepartmentActionInterface extends Action<DepartmentActionsType> {
    type: DepartmentActionsType.DELETE_DEPARTMENT,
    payload: Department['id']
}

export interface setActiveDepartmentActionInterface extends Action<DepartmentActionsType> {
    type: DepartmentActionsType.SET_ACTIVE_DEPARTMENT,
    payload: Department['id']
}

export type DepartmentActions = addDepartmentActionInterface |  updateDepartmentActionInterface | deleteDepartmentActionInterface | setActiveDepartmentActionInterface