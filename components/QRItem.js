import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './QRItemStyles';

export function QRItem({ name, id }) {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Code: {name}</Text>
    </View>
  )
};