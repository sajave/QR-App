import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, Linking, SafeAreaView, Modal, Pressable, TextInput } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { styles } from './ReadQRStyles'
import { buttonStyles } from '../../../constant/buttonStyle';
import { putQRData } from '../../../redux/actions';
import { scannedOn } from '../../../constant/date';

export function ReadQR() {
  const dispatch = useDispatch()
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [currentQR, setCurrentQR] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [QRName, setQRName] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  function simulateScan() {
    setScanned(true);
    const data = 'https://github.com/sajave/QR-App'
    setCurrentQR(data);
    setModalVisible(true);
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setCurrentQR(data);
    setModalVisible(true);
  };

  function saveQRName() {
    const dateScanned = scannedOn();
    dispatch(putQRData(currentQR, dateScanned, QRName));
    setModalVisible(false);
    setQRName('');
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  };
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  };

  if (modalVisible) {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Name this QR code</Text>
            <TextInput
              style={styles.input}
              placeholder="I.e: Amazon shoes"
              onChangeText={setQRName}
              value={QRName}
            />
            <View style={styles.containerButtons}>
              <Pressable
                style={[styles.button, styles.buttonSave]}
                onPress={() => saveQRName()}
              >
                <Text style={styles.textStyle}>Save</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    )
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: 20,
      }}>Scan your CODE</Text>
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
        <TouchableOpacity style={buttonStyles.secondaryButton} onPress={() => simulateScan()}>
          <Text style={buttonStyles.secondaryBtnText}>Simulate scan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};