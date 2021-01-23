import React, { Component, Fragment } from 'react';
import { Layout, Button, ApplicationProvider } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { default as theme } from '../theme/custom-theme.json'; // <-- Import app theme
import client from '../utils/httpClient';
import DataList from '../components/common/dataList';

export default class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  async getData() {
    try {
      const response = await client.get('/data/all');
      this.setState({ data: response.data });
      console.log(response.data);
    } catch (e) {
      console.error(e);
      return;
    }
  }
  render() {
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
            <View style={styles.card}>
              <DataList data={this.state.data} />
            </View>
            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate('QRCode')}
            >
              Scan QR Code
            </Button>
            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate('DataForm')}
            >
              Enter Manually
            </Button>
          </Layout>
        </ApplicationProvider>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    maxHeight: 392,
    width: 350,
    margin: 10,
  },
  button: {
    margin: 10,
    width: 170,
    height: 50,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    borderWidth: 0.2,
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
    color: theme['color-warning-600'],
  },
  card: {
    shadowOpacity: 0.75,
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    borderWidth: 0.2,
  },
});
