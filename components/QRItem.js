import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './QRItemStyles';

export function QRItem({ url, date }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.font}>Scanned on {date}</Text>
        <View style={styles.containerURL}>
          <Text style={styles.font}>Link: </Text>
          <Text style={styles.url}>{url}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
};