import { call, getContext, put, takeEvery } from "redux-saga/effects";

import { UserActions } from "../../actions/user";
import { FetchUserAction } from "../../models/transform/FetchUserAction";

function* fetchUsersAsync(action: FetchUserAction) {
    const UserRepository = yield getContext("UserRepository");
    const users = yield call(UserRepository.fetchUsers, action.payload?.page, action.payload?.results);
    console.log('users yield', users)
    yield put({ type: UserActions.UPDATE_USER_LIST, payload: { users } });
}

function* watchFetchUsersAsync() {
    yield takeEvery(UserActions.FETCH_USERS_ASYNC, fetchUsersAsync)
}

export default watchFetchUsersAsync;