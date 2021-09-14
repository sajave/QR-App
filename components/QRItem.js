import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { styles } from './QRItemStyles';

// eslint-disable-next-line react/prop-types
export function QRItem({ url, date, qrName }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.fontName}>{qrName.toUpperCase()}</Text>
        <Text style={styles.font}>Scanned on {date}</Text>
        <Text style={styles.url}>{url}</Text>
      </TouchableOpacity>
    </View>
  )
};