import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import DataForm from '../components/DataForm';
import TabNavigation from './tabNavigation';
import QRCode from '../components/common/QRCode';

const Stack = createStackNavigator();

function MaininNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"
          options={{
            headerTransparent: true,
            headerShown: false
          }}
          component={TabNavigation} />
        <Stack.Screen name="SignUp"
          options={{
            headerTransparent: true,
          }}
          component={SignUp} />
        <Stack.Screen name="Login"
          options={{
            headerTransparent: true
          }}
          component={Login} />
          <Stack.Screen name="DataForm"
          options={{
            headerTransparent: true
          }}
          component={DataForm} />
           <Stack.Screen name="QRCode"
          options={{
            headerTransparent: true
          }}
          component={QRCode} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default MaininNavigation;