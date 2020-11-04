import React, { Component, Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button, Input } from '@ui-kitten/components';
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
            <View style={styles.controlContainer}>
            <Input
                style={styles.inputbtn}
                size='Medium'
                placeholder='Product Name'
              />
              <Input
                style={styles.inputbtn}
                placeholder='Description'
                size='Medium'
              />
              <Input
                style={styles.inputbtn}
                placeholder='Code'
                size='Medium'
              />
              <Input
                style={styles.inputbtn}
                placeholder='Manufactured Date'
                size='Medium'
              />
            </View>
              <Button style={styles.button} appearance='outline' status='success' onPress={() => this.props.navigation.navigate('Login')}>
                Save
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
    width: 177,
    height: 50
  },
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    justifyContent: 'center',
    width: 400
  },
  text: {
    justifyContent: 'flex-start',
    color: theme["color-warning-600"]
    
  },
  inputbtn: {
    marginVertical: 2,
  },
});