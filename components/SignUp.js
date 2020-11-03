import React, { Component, Fragment} from 'react';

import {
  StatusBar,
  SafeAreaView,
  Text,
  ScrollView
} from 'react-native';

export default class SignUp extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content"/>
        <SafeAreaView>
          <ScrollView>
            <Text>Sign Up</Text>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  };
};