import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button, Input, Datepicker } from '@ui-kitten/components';
import { default as theme } from '../theme/custom-theme.json';
import client from '../utils/httpClient';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date,
      productName: "",
      description: "",
      code: "",
    };
  }
  setNewDate(date) {
    this.setState({
      date: date
    })
  };
  async saveData() {
    const { productName, description, code,date } = this.state;
    const data = {
      name: productName,
      description: description,
      code: code,
      producedAt: date
    };
    const response = await client.post('/data', data);
    console.log(response.data)
  }
  render() {
    const { productName, description, code } = this.state;
    return (
      <Fragment>
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
          <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.controlContainer}>
              <Input
                style={styles.inputbtn}
                size='medium'
                placeholder='Product Name'
                value={productName}
                onChangeText={(productName) => this.setState({productName})}
              />
              <Input
                style={styles.inputbtn}
                placeholder='Description'
                size='medium'
                value={description}
                onChangeText={(description) => this.setState({description})}
              />
              <Input
                style={styles.inputbtn}
                placeholder='Code'
                size='medium'
                value={code}
                onChangeText={(code) => this.setState({code})}
              />
              <Datepicker
                date={this.state.date}
                onSelect={nextDate => this.setNewDate(nextDate)}
              />
            </View>
            <Button style={styles.button} appearance='outline' status='success' onPress={() => this.saveData()}>
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
    width: screenWidth/1.1
  },
  text: {
    justifyContent: 'flex-start',
    color: theme["color-warning-600"]

  },
  inputbtn: {
    marginVertical: 2,
  },
});