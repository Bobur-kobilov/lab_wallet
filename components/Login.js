import React, { Component, Fragment } from 'react';

import {
  StatusBar,
  SafeAreaView,
  Text,
  ScrollView
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
  };
  render () {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content"/>
        <SafeAreaView>
          <ScrollView>
            <Text>Login Page</Text>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    )
  } 
}