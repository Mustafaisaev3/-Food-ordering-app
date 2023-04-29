import { UserType } from "../../../utils/types"
import { UpdateUserActionInterface, UserActionsType } from "./contracts/actionsType"


export const updateUser = (user: UserType): UpdateUserActionInterface => {
    return {
        type: UserActionsType.UPDATE_USER_DATA,
        user,
    }
}
