/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Home from './components/Home'
import MaininNavigation from './navigation/mainNavigation';
const App: () => React$Node = () => {
  return (
    <MaininNavigation />
    // <Home />
  );
};
export default App;
