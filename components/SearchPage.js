import React, { Component, Fragment } from 'react';

import {
  StatusBar,
  SafeAreaView,
  Text,
  ScrollView
} from 'react-native';

export default class Search extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content"/>
        <SafeAreaView>
          <ScrollView>
            <Text>Search Page</Text>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  };
};
