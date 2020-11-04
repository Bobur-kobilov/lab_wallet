import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';


export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
  }
  setVisible() {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }
  render() {
    return (
      <View style={styles.container}>

      <Button onPress={() => this.setVisible()}>
       Search
      </Button>

      <Modal
        visible={this.state.isVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => this.setVisible()}>
        <Card disabled={true}>
          <Text style={styles.text}>Chemical Products means products manufactured, processed, sold, or distributed by the Company that are chemical substances or that contain or are comprised of chemical substances, preparations or mixtures of chemical substances, including but not limited to inks, cleaning solvents, maintenance fluids and media</Text>
          <Button onPress={() => this.setVisible()}>
            DISMISS
          </Button>
        </Card>
      </Modal>

    </View>
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
  }
});