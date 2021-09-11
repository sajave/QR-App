import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { getQRData } from '../../../redux/actions';
import { QRItem } from '../../../components/QRItem';
import { buttonStyles } from '../../../constant/buttonStyle';
import { styles } from '../ReadQR/ReadQRStyles';

export function QRList() {
  const dispatch = useDispatch();
  const scannedQRs = useSelector(state => state.QRdata);

  function checkReduxGet() {
    dispatch(getQRData())
  };

  return (
    <View style={buttonStyles.container}>
      <View >
        <TouchableOpacity style={buttonStyles.button} onPress={() => checkReduxGet()}>
          <Text style={buttonStyles.btnText}>Get data</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={scannedQRs}
          renderItem={({ item, index }) => (
            <QRItem
              id={index}
              name={item} />
          )}
        />
      </SafeAreaView>
    </View>
  )
}