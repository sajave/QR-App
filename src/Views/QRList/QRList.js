import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { getQRData } from '../../../redux/actions';

import { buttonStyles } from '../../../constant/buttonStyle';

export function QRList() {
  const dispatch = useDispatch();

  function checkReduxGet() {
    dispatch(getQRData())
  };

  return (
    <View style={buttonStyles.container}>
      <Text>This is the 'QRList' view</Text>
      <View >
        <TouchableOpacity style={buttonStyles.button} onPress={() => checkReduxGet()}>
          <Text style={buttonStyles.btnText}>Get data</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}