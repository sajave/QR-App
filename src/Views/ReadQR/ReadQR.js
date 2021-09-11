import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { styles } from './ReadQRStyles'
import { buttonStyles } from '../../../constant/buttonStyle';
import { putQRData } from '../../../redux/actions';
import { getRandomString } from '../../../constant/randomStringGenerator';

export function ReadQR() {
  const dispatch = useDispatch()
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  function checkReduxPet() {
    const randomString = getRandomString(6);
    dispatch(putQRData(randomString));
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    dispatch(putQRData(data));
    alert(`Bar code has been scanned and added to your list!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      {scanned && (
        <TouchableOpacity style={buttonStyles.button} onPress={() => setScanned(false)}>
          <Text style={buttonStyles.btnText}>Scan again?</Text>
        </TouchableOpacity>
      )
      }
      <View >
        <TouchableOpacity style={buttonStyles.button} onPress={() => checkReduxPet()}>
          <Text style={buttonStyles.btnText}>Put data</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}