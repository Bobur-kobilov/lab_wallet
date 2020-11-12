import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { ApplicationProvider, Layout, Button, Input } from '@ui-kitten/components';
import { default as theme } from '../theme/custom-theme.json'; // <-- Import app theme
import * as eva from '@eva-design/eva';
import client from '../utils/httpClient';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUserData, removeUserData } from '../redux/actions/user';
const screenWidth = Math.round(Dimensions.get('window').width);

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      confirmPswd: "",
      firstName: "",
      lastName: "",
      orgName: "",
      pswdError: ""
    }
  }
  async signUp() {
    try {
      const { email, password,confirmPswd,firstName, lastName, orgName } = this.state; 
      const data = {
        "email": email,
        "pswd": password,
        "firstName": firstName,
        "lastName": lastName,
        "orgName": orgName
    }   
      if (password != confirmPswd) {
        this.setState({pswdError: "Passwords do not match"})
        return;
      }
      const response = await client.post('/signup',data)
      console.log(response.data)
      const userData = {
        token: response.data
      };
      this.props.addUserData(userData);
      this.props.removeUserData()
      console.log(this.props.user);
    } catch (e) {
      console.error(e)
    }
  }
  toggleSecureEntry = () => {
    this.setState({secureTextEntry: !this.state.secureTextEntry})
  };
  render() {
    const { email, password, confirmPswd,pswdError,firstName, lastName, orgName } = this.state;
    return (
      <Fragment>
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
          <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View style={styles.controlContainer}>
                  <View style={styles.card}>
                    <Input
                      style={styles.inputbtn}
                      size='medium'
                      placeholder='Email'
                      value={email}
                      autoCapitalize="none"
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
                      caption={pswdError}
                      secureTextEntry={true}
                      onChangeText={(confirmPswd) => this.setState({confirmPswd, pswdError: ''})}
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
              </View>
              <View style={styles.buttonContainer}>
              <Button style={styles.button} onPress={() => this.signUp()}>
                Sign Up
              </Button>
              </View>

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
  card: {
    shadowOpacity: 0.75,
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    borderWidth: 0.2
  },
  buttonContainer: {
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    borderWidth: 0.2
  }
});
const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
};
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addUserData,
    removeUserData
  }, dispatch)
);
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);