
import { applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import { createStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import userReducer from './reducers/user';

import UserRepository from './repositories/user';

const sagaMiddleware = createSagaMiddleware({
    context: {
        UserRepository
    }
});

const appReducer = combineReducers({
    users: userReducer
})

const store = createStore(
    appReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;