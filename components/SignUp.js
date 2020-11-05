import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { ApplicationProvider, Layout, Text, Button, Input, Icon, Divider } from '@ui-kitten/components';
import { default as theme } from '../theme/custom-theme.json'; // <-- Import app theme
import * as eva from '@eva-design/eva';
import client from '../utils/httpClient';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      confirmPswd: "",
      firstName: "",
      lastName: "",
      orgName: ""
    }
  }
  async signUp() {
    try {
      const { email, password,confirmPswd, firstName, lastName, orgName } = this.state; 
      const data = {
        "email": email,
        "pswd": password,
        "firstName": firstName,
        "lastName": lastName,
        "orgName": orgName
    }   
      const response = await client.post('/signup',data)
      console.log(response.data)
    } catch (e) {
      console.error(e)
    }
  }
  toggleSecureEntry = () => {
    this.setState({secureTextEntry: !this.state.secureTextEntry})
  };
  render() {
    const { email, password, confirmPswd,firstName, lastName, orgName } = this.state;
    return (
      <Fragment>
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
          <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.controlContainer}>
              <Input
                style={styles.inputbtn}
                size='medium'
                placeholder='Email'
                value={email}
                onChangeText={(email) => this.setState({email})}
              />
              <Input
                style={styles.inputbtn}
                placeholder='Password'
                size='medium'
                value={password}
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
              />
              <Input
                style={styles.inputbtn}
                placeholder='Confirm Password'
                size='medium'
                value={confirmPswd}
                secureTextEntry={true}
                onChangeText={(confirmPswd) => this.setState({confirmPswd})}
              />
              <Input
                style={styles.inputbtn}
                size='medium'
                placeholder='First Name'
                value={firstName}
                onChangeText={(firstName) => this.setState({firstName})}
              />
              <Input
                style={styles.inputbtn}
                size='medium'
                placeholder='Last Name'
                value={lastName}
                onChangeText={(lastName) => this.setState({lastName})}
              />
              <Input
                style={styles.inputbtn}
                size='medium'
                placeholder='Organization'
                value={orgName}
                onChangeText={(orgName) => this.setState({orgName})}
              />
            </View>
            <Button style={styles.button} appearance='outline' status='success' onPress={() => this.signUp()}>
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