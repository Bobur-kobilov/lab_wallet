import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import {
  ApplicationProvider,
  Layout,
  Button,
  Input,
} from '@ui-kitten/components';
import { default as theme } from '../theme/custom-theme.json'; // <-- Import app theme
import * as eva from '@eva-design/eva';
import client from '../utils/httpClient';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  async login() {
    const { email, password } = this.state;
    const data = {
      email: email,
      pswd: password,
    };
    const response = await client.post('/login', data);
    console.log(response.data);
  }
  render() {
    const { email, password } = this.state;
    return (
      <Fragment>
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
          <Layout
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={styles.controlContainer}>
              <View style={styles.card}>
                <Input
                  style={styles.inputbtn}
                  size="medium"
                  placeholder="Email"
                  value={email}
                  autoCapitalize="none"
                  onChangeText={(email) => this.setState({ email })}
                />
                <Input
                  style={styles.inputbtn}
                  placeholder="Password"
                  size="medium"
                  value={password}
                  secureTextEntry={true}
                  onChangeText={(password) => this.setState({ password })}
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button style={styles.button} onPress={() => this.login()}>
                Login
              </Button>
            </View>
          </Layout>
        </ApplicationProvider>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    margin: 3,
    width: 170,
    height: 50,
  },
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    justifyContent: 'center',
    width: screenWidth / 1.1,
  },
  inputbtn: {
    marginVertical: 2,
  },
  card: {
    shadowOpacity: 0.75,
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    borderWidth: 0.2,
  },
  buttonContainer: {
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    borderWidth: 0.2,
  },
});
