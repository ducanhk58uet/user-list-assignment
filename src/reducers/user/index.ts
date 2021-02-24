import { UserActions } from "../../actions/user";
import { User } from "../../models/entities/User";
import { UpdateUserListAction } from "../../models/transform/UpdateUserListAction";

const userReducer = (state: User[] = [], action: UpdateUserListAction) => {
    switch (action.type) {
        case UserActions.UPDATE_USER_LIST:
            return action.payload?.users;

        default:
            return state
    }
}

export default userReducer;