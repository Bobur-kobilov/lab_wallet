import React, { Component, Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { ApplicationProvider, Layout, Text, Button, Input, TopNavigation, Divider } from '@ui-kitten/components';
import { default as theme } from '../theme/custom-theme.json'; // <-- Import app theme
import * as eva from '@eva-design/eva';


export default class Safety extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Fragment>
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
          <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.text} status='basic'>Chemical Safety is achieved by undertaking all activities involving chemicals in such a way as to ensure the safety of human health and the environment. It covers all chemicals, natural and manufactured, and the full range of exposure situations from the natural presence of chemicals in the environment to their extraction or synthesis, industrial production, transport use and disposal.
            Chemical safety has many scientific and technical components. Among these are toxicology, ecotoxicology and the process of chemical risk assessment which requires a detailed knowledge of exposure and of biological effects.
            Through the International Programme on Chemical Safety (IPCS), WHO works to establish the scientific basis for the sound management of chemicals, and to strengthen national capabilities and capacities for chemical safety.  </Text>
          </Layout>
        </ApplicationProvider>
      </Fragment>
    )
  }
};

const styles = StyleSheet.create({
  text: {
    margin: 15,
  }
});