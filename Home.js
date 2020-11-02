import React, { Component, Fragment } from 'react';

import {
  StatusBar,
  SafeAreaView,
  Text,
  ScrollView
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView>
            <Text>Home Page</Text>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    )
  }
}
