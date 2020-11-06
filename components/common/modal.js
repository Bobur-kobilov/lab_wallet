import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Button, Card, Modal, Text, Input } from '@ui-kitten/components';
import client from '../../utils/httpClient';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      data: [],
      code: ""
    }
  }
  async getData() {
    try {
      const code = "fjsdnjf324fdsaf22"
      console.log(code)
      const response = await client.get(`/data?code=${code}`);
      await this.setState({
        data: response.data
      })
      console.log(this.state.data);
      this.setVisible();
    } catch (e) {
      console.error(e);
      return;
    }
  }
  setVisible() {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }
  render() {
    const { code, data } = this.state;
    console.log(data)
    return (
      <Fragment>
        <View style={styles.controlContainer}>
          <Input
            style={styles.inputbtn}
            size='medium'
            placeholder='Search'
            value={code}
            onChangeText={(code) => this.setState({code})}
          />
        </View>
        <View style={styles.container}>
          <Button onPress={() => this.getData()}>
            Search
      </Button>

          <Modal
            visible={this.state.isVisible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => this.setVisible()}>
            <Card disabled={true}>
              {data.map((item) => {
               return <Text style={styles.text}>{item.Name} {item.Description}</Text> 
              })}
              <Button onPress={() => this.setVisible()}>
                DISMISS
          </Button>
            </Card>
          </Modal>

        </View>
      </Fragment>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    minHeight: 292,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    margin: 10
  },
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    justifyContent: 'center',
    width: screenWidth / 1.1
  },
});