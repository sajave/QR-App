import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ReadQR } from '../ReadQR/ReadQR';
import { QRList } from '../QRList/QRList';

const Tab = createBottomTabNavigator();

export function Main() {
  return (
    <Tab.Navigator
      initialRouteName="ReadQR"
      tabBarOptions={{
        activeTintColor: 'darkred'
      }}>
      <Tab.Screen name='ReadQR' component={ReadQR} />
      <Tab.Screen name='QRList' component={QRList} />
    </Tab.Navigator>
  );
}