import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from '../components/SearchPage';
import Manage from '../components/Management';
import Home from '../components/Home';
import MaininNavigation from './mainNavigation'
const Tab = createBottomTabNavigator();


export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#000"
      barStyle={{ backgroundColor: '#000' }}
    >
      <Tab.Screen name="Home"
        component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Manage" component={Manage} />
    </Tab.Navigator>
  );
}