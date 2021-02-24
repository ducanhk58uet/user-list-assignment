import { User } from "../../models/entities/User";
import { FetchUserAction } from "../../models/transform/FetchUserAction";
import { UpdateUserListAction } from "../../models/transform/UpdateUserListAction";

const UserActions = {
    UPDATE_USER_LIST: 'UPDATE_USER_LIST',
    FETCH_USERS_ASYNC: 'FETCH_USERS_ASYNC'
}

const fetchUsersAsync = (page: number, results: number): FetchUserAction => {
    const action: FetchUserAction = { 
        type: UserActions.FETCH_USERS_ASYNC,
        payload: {
            page,
            results
        } 
    }
    return action;
}

const updateUserList = (users: User[]): UpdateUserListAction => {
    const action: UpdateUserListAction = { 
        type: UserActions.UPDATE_USER_LIST,
        payload: {
            users
        }
    }
    return action;
}

export {
    UserActions,
    fetchUsersAsync,
    updateUserList
};