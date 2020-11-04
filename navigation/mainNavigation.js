import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, BlurView, StyleSheet } from 'react-native';
import Home from '../components/Home';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import TabNavigation from './tabNavigation';
const Stack = createStackNavigator();

function MaininNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab"
          options={{
            headerTransparent: true,
            // headerShown: false
          }}
          component={TabNavigation} />
        {/* <Stack.Screen name="Home"
          options={{
            headerTransparent: true,
            headerShown: false
          }}
          component={Home} /> */}
        <Stack.Screen name="SignUp"
          options={{
            headerTransparent: true,
            // headerShown: false
          }}
          component={SignUp} />
        <Stack.Screen name="Login"
          options={{
            headerTransparent: true
          }}
          component={Login} />


      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default MaininNavigation;