import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import UserTable from './UserTable';
import TestContants from "../../constants/test";
import { Provider } from 'react-redux';
 
const mockStore = configureStore([]);

let store: any;
 
beforeEach(() => {
    store = mockStore({
        users: TestContants.TEST_USERS,
    });
});

test('renders learn react link', () => {
  render(
  <Provider store={store}>
    <UserTable />
  </Provider>);
  const userNameTableHeader = screen.getByText(TestContants.TEST_USERS[0].login.username);
  expect(userNameTableHeader).toBeInTheDocument();
});
