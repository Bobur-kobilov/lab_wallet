import React, { Component, Fragment } from 'react';
import { Dimensions } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Input } from '@ui-kitten/components';
import { default as theme } from '../theme/custom-theme.json'; //
import Popup from './common/modal';
import {
  StyleSheet,
  View
} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

export default class Search extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Fragment>
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
          <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Popup />
          </Layout>
        </ApplicationProvider>
      </Fragment>
    );
  };
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    margin: 3,
    width: 170,
    height: 50
  },
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    justifyContent: 'center',
    width: screenWidth / 1.1
  },
  inputbtn: {
    marginVertical: 2,
  },
});