import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native'
import { getQRData, putQRData } from '../../../redux/actions';
import { styles } from '../../../constant/buttonStyle';

export function ReadQR() {
  const dispatch = useDispatch();

  function checkReduxGet() {
    dispatch(getQRData())
  }

  function checkReduxPut() {
    dispatch(putQRData('example data'))
  }

  return (
    <View>
      <Text>This is the 'ReadQR' view</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => checkReduxGet()}>
          <Text>Get data</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => checkReduxPut()}>
          <Text>Put data</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}