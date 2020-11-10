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
    };
    // this.getData = this.getData.bind(this);
    // this.setVisible = this.setVisible.bind(this);
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
      await this.setVisible();
    } catch (e) {
      console.error(e);
      return;
    }
  }
  async setVisible() {
    await this.setState({
      isVisible: !this.state.isVisible
    });
    console.log(this.state.isVisible)
  }
  render() {
    const { code, data, isVisible } = this.state;
    return (
      <Fragment>
        <View style={styles.controlContainer}>
          <View style={styles.card}>
            <Input
              style={styles.inputbtn}
              size='medium'
              placeholder='Search'
              value={code}
              onChangeText={(code) => this.setState({ code })}
            />
          </View>
        </View>
        <View style={styles.container}>
          <Button onPress={() => this.getData()}>
            Search
          </Button>
          <Modal
            visible={isVisible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => this.setVisible()}>
            <Card disabled={true}>
              {data.map((item, key) => {
                return <Text style={styles.text} key={key}>{item.Name} {item.Description}</Text>
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
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    borderWidth: 0.2
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
  card: {
    shadowOpacity: 0.75,
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    borderWidth: 0.2
  },
});