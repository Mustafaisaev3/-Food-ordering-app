import { SELECT_CATEGORY } from "../actions/SelectCategory";
import { SelectCetegoryType } from "../actions/SelectCategory";

export const CategoryReducer = (state = 'all', action: SelectCetegoryType) => {
    switch(action.type){
        case SELECT_CATEGORY:
            return action.selected_category
        default:
            return 'all'
    }
}