import React from 'react';

import store from './store';
import { Provider } from 'react-redux';
import UserTable from './components/UserTable';
import useStyles from './styles';



function App() {
  const classes = useStyles();
  
  return (
    <Provider store={store}>
      <div data-testid="app-container" className={classes.appContainer}>
        <UserTable />
      </div>
    </Provider>
  );
}

export default App;
