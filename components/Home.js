import React, { Component, Fragment } from 'react';
import { StyleSheet } from 'react-native'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import { default as theme } from '../theme/custom-theme.json'; // <-- Import app theme
export default class Home extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <Fragment>
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
          <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h1'>Laboratory Wallet</Text>
            <Button style={styles.button} appearance='outline' status='success' onPress={() => this.props.navigation.navigate('SignUp')}>
              Sign Up
            </Button>
            <Button style={styles.button} appearance='outline' status='success' onPress={() => this.props.navigation.navigate('Login')}>
              Login
            </Button>
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
    backgroundColor: '#3366FF',
  },
});