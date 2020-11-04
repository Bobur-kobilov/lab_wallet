import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { ApplicationProvider, Layout, Text, Button, Input, TopNavigation, Divider } from '@ui-kitten/components';
import { default as theme } from '../theme/custom-theme.json'; // <-- Import app theme
import * as eva from '@eva-design/eva';


const screenWidth = Math.round(Dimensions.get('window').width);
export default class SignUp extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Fragment>
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
          <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.controlContainer}>
              <Input
                style={styles.inputbtn}
                size='medium'
                placeholder='Email'
              />
              <Input
                style={styles.inputbtn}
                placeholder='Password'
                size='medium'
              />
              <Input
                style={styles.inputbtn}
                size='medium'
                placeholder='First Name'
              />
              <Input
                style={styles.inputbtn}
                size='medium'
                placeholder='Last Name'
              />
              <Input
                style={styles.inputbtn}
                size='medium'
                placeholder='Organization'
              />
            </View>
            <Button style={styles.button} appearance='outline' status='success' onPress={() => this.props.navigation.navigate('SignUp')}>
              Sign Up
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
    width: screenWidth/1.1
  },
  inputbtn: {
    marginVertical: 2,
  },
});