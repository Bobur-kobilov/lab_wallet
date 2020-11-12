/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Home from './components/Home'
import MaininNavigation from './navigation/mainNavigation';
import TabNavigation from './navigation/tabNavigation';
import userReducer from './redux/reducers/user';

const store = createStore(userReducer);

const App: () => React$Node = () => {
  return (
    <Fragment>
       <Provider store={store}>
        <MaininNavigation />
      </Provider>
    </Fragment>
  );
};
export default App;
