import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from '../components/SearchPage';
import Manage from '../components/Management';
import Home from '../components/Home';
import Safety from '../components/Safety';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Manage" component={Manage} />
      <Tab.Screen name="Safety" component={Safety} />
    </Tab.Navigator>
  );
}
