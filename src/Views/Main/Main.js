import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ReadQR } from '../ReadQR/ReadQR';
import { QRList } from '../QRList/QRList';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Read QR"
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#5cb9ff',
        activeBackgroundColor: '#5cb9ff',
        inactiveBackgroundColor: 'white',
        style: {
          backgroundColor: '#CE4418',
          paddingBottom: 3
        }
      }}
    >
      <Tab.Screen
        name='Read QR'
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="qr-code-scanner" size={28} color="black" />
          ),
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#5cb9ff'
          },
        }}
        component={ReadQR} />
      <Tab.Screen name='QR List'
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="list" size={28} color="black" />
          ),
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#5cb9ff'
          },
        }}
        component={QRList} />
    </Tab.Navigator>
  );
}