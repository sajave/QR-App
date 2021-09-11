import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, Linking, SafeAreaView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { styles } from './ReadQRStyles'
import { buttonStyles } from '../../../constant/buttonStyle';
import { putQRData } from '../../../redux/actions';
import { getRandomString } from '../../../constant/randomStringGenerator';
import { scannedOn } from '../../../constant/date';

export function ReadQR() {
  const dispatch = useDispatch()
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [currentQR, setCurrentQR] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  function checkReduxPet() {
    const randomString = getRandomString(6);
    const dateScanned = scannedOn();
    dispatch(putQRData(randomString, dateScanned));
    console.log(dateScanned)
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setCurrentQR(data);
    const dateScanned = scannedOn();
    dispatch(putQRData(data, dateScanned));
    alert(`Bar code has been scanned and added to your list!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  };
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      {scanned && (
        <View style={styles.containerButtons}>
          <TouchableOpacity
            style={buttonStyles.secondaryButton}
            onPress={() => Linking.openURL(currentQR)}>
            <Text style={buttonStyles.secondaryBtnText}>Go to Link</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttonStyles.button}
            onPress={() => setScanned(false)}>
            <Text style={buttonStyles.btnText}>Scan again?</Text>
          </TouchableOpacity>
        </View>
      )
      }
      <View >
        <TouchableOpacity style={buttonStyles.button} onPress={() => checkReduxPet()}>
          <Text style={buttonStyles.btnText}>Put data</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};