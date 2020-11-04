import React, {Component, Fragment} from 'react';
import {Layout, Button, Icon, List, ListItem,ApplicationProvider } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { default as theme } from '../theme/custom-theme.json'; // <-- Import app theme
const data = new Array(8).fill({
  title: 'Acetone',
  description: 'Bisphenol A, MMA, MIBK, IPA, solvents, pharmaceuticals / agrochemicals',
});

const ListAccessoriesShowcase = () => {

  const renderItemAccessory = (props) => (
    <Button size='tiny'>More</Button>
  );

  // const renderItemIcon = (props) => (
  //   // <Icon {...props} name='person'/>
  // );

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      // accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  return (
    <List
      style={styles.container}
      data={data}
      renderItem={renderItem}
    />
  );
};
export default class Manage extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
    <Fragment>
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ListAccessoriesShowcase />
            <Button style={styles.button} appearance='outline' status='success' onPress={() => this.props.navigation.navigate('Login')}>
                Scan QR Code
            </Button>
            </Layout>
        </ApplicationProvider>
      </Fragment>
    );
  };
};


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