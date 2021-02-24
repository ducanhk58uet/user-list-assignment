import { fetchUsersAsync, updateUserList, UserActions } from "."
import { User } from "../../models/entities/User";
import { FetchUserAction } from "../../models/transform/FetchUserAction"
import { UpdateUserListAction } from "../../models/transform/UpdateUserListAction";
import TestContants from "../../constants/test";

describe('action fetchUsersAsync', () => {
    it('should create an action to fetchUsersAsync', () => {
      const page = 1;
      const results = 10;
      const expectedAction: FetchUserAction = {
        type: UserActions.FETCH_USERS_ASYNC,
        payload: {
            page,
            results
        }
      }
      expect(fetchUsersAsync(page, results)).toEqual(expectedAction)
    })
})

describe('action updateUserList', () => {
    it('should create an action to updateUserList', () => {
        const users: User[] = TestContants.TEST_USERS;

        const expectedUserListAction: UpdateUserListAction = {
            type: UserActions.UPDATE_USER_LIST,
            payload: {
                users
            }
        }

        expect(updateUserList(users)).toEqual(expectedUserListAction)
    })
})