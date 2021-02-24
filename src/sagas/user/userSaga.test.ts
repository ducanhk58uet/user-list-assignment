
import { expectSaga } from 'redux-saga-test-plan';

import TestConstants from "../../constants/test";

import userSaga from '.';
import { UserActions } from '../../actions/user';
import { getContext } from 'redux-saga/effects';

it('user saga works properly', () => {
    const UserRepository = {
        fetchUsers: () => {
            return Promise.resolve(TestConstants.TEST_USERS);
        }
    };
  
    return expectSaga(userSaga)
        .provide([[getContext("UserRepository"), UserRepository]])
        .put({
            type: UserActions.UPDATE_USER_LIST,
            payload: {
                users: TestConstants.TEST_USERS
            },
        })
        .dispatch({ type: UserActions.FETCH_USERS_ASYNC, payload: { page: 1, results: 10 } })
        .run();
});