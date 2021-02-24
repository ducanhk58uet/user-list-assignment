import { User } from "../entities/User";

export interface UpdateUserListAction {
    type: string;
    payload: {
        users: User[]
    };
}