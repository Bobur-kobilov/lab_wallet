/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment} from 'react';

import Home from './components/Home'
import MaininNavigation from './navigation/mainNavigation';
import TabNavigation from './navigation/tabNavigation';
const App: () => React$Node = () => {
  return (
    <Fragment>
      <MaininNavigation />
      {/* <TabNavigation /> */}
    </Fragment>
    // <Home />
  );
};
export default App;
