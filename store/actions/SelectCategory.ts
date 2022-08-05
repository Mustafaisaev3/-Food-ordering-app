export const SELECT_CATEGORY = 'SELECT_CATEGORY'

export type SelectCetegoryType = {
    type: string,
    selected_category: string
}

export const SelectCetegory = (type: string, selected_category: string): SelectCetegoryType => {
    return {
        type: SELECT_CATEGORY,
        selected_category: selected_category
    }
}