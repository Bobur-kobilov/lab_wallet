import React, { Component } from 'react';
import { Button, List, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { default as theme } from '../../theme/custom-theme.json'; // <-- Import app theme

export default class DataList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.data)
    const data = new Array(8).fill({
      Name: 'Acetone',
      Description: 'Bisphenol A, MMA, MIBK, IPA, solvents, pharmaceuticals / agrochemicals',
    });
    const renderItemAccessory = (props) => (
      <Button size='tiny'>More</Button>
    );
    const renderItem = ({ item, index }) => (
      <ListItem
        title={`${item.Name} ${index + 1}`}
        description={`${item.Description} ${index + 1}`}
        accessoryRight={renderItemAccessory}
      />
    );
    return (
      <List
        style={styles.container}
        // data={this.props.data  === [] ? data : this.props.data }
        data={this.props.data}
        renderItem={renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 392,
    width: 350,
    margin: 10
  },
  button: {
    margin: 10,
    width: 170,
    height: 50
  },
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    justifyContent: 'center',
    backgroundColor: '#3366FF',
  },
  text: {
    justifyContent: 'flex-start',
    color: theme["color-warning-600"]

  }
});