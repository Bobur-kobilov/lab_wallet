import React, { Component, Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
} from '@ui-kitten/components';
import { default as theme } from '../theme/custom-theme.json';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.user);
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
            <Text category="h1" style={styles.text} status="basic">
              Lab Wallet
            </Text>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button}
                onPress={() => this.props.navigation.navigate('SignUp')}
              >
                Sign Up
              </Button>
              <Button
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Login')}
              >
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 3,
    width: 177,
    height: 50,
  },
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    justifyContent: 'center',
  },
  text: {
    justifyContent: 'flex-start',
    color: theme['color-warning-600'],
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    borderWidth: 0.2,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 350,
    shadowOpacity: 1,
    shadowRadius: 65,
    shadowColor: 'black',
    shadowOffset: { height: 100, width: 100 },
  },
  buttonContainer: {
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    borderWidth: 0.2,
  },
});
const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
};
export default connect(mapStateToProps)(Home);
