import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ReadQR } from '../ReadQR/ReadQR';
import { QRList } from '../QRList/QRList';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function Main() {
  return (
    <Tab.Navigator
      initialRouteName="ReadQR"
      tabBarOptions={{
        activeTintColor: 'darkred'
      }}>
      <Tab.Screen
        name='ReadQR'
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="qr-code-scanner" size={28} color="black" />
          )
        }}
        component={ReadQR} />
      <Tab.Screen name='QRList'
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="list" size={28} color="black" />
          )
        }}
        component={QRList} />
    </Tab.Navigator>
  );
}