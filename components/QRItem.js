import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './QRItemStyles';

export function QRItem({ url, id, date }) {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Scanned on {date}</Text>
      <Text style={styles.font}>ID: {id}</Text>
      <Text style={styles.font}>Code: {url}</Text>
    </View>
  )
};