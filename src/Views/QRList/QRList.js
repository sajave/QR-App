import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, SafeAreaView, FlatList, TextInput, Text, ImageBackground } from 'react-native';
import { QRItem } from '../../../components/QRItem';
import { styles } from './QRListStyles';

export function QRList() {
  const scannedQRs = useSelector(state => state.QRdata);
  const [inputSearch, setInputSearch] = useState('');

  function searchChange(event) {
    setInputSearch(event);
    return
  };

  const searchBar = scannedQRs.filter(e => {
    return e.QRName.toLowerCase().includes(inputSearch.toLowerCase());
  });

  if (scannedQRs.length == 0) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/Background/app-background-v001.png')}
          resizeMode='cover'
          style={{
            flex: 1,
            justifyContent: "center"
          }}
        >
          <View style={styles.container}>
            <Text style={{ position: 'absolute', fontSize: 20, fontWeight: 'bold', color: 'black' }}>You don{"'"}t have scanned QRs</Text>
          </View>
        </ImageBackground>
      </View >
    )
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/Background/app-background-v001.png')}
        resizeMode='cover'
        style={{
          flex: 1,
          justifyContent: "center"
        }}
      >
        <TextInput
          style={styles.input}
          onChangeText={(event) => searchChange(event)}
          placeholder="Search by name..."
          value={inputSearch}
        />
        {searchBar.length > 0 ?
          (
            <View style={styles.container}>
              <ImageBackground
                source={require('../../../assets/Background/app-background-v001.png')}
                resizeMode='cover'
                style={{
                  flex: 1,
                  justifyContent: "center"
                }}
              >
                <FlatList
                  data={searchBar.reverse()}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <QRItem
                      url={item.newData}
                      date={item.dateScanned}
                      qrName={item.QRName} />
                  )}
                />
              </ImageBackground>
            </View>
          ) : (
            <View style={styles.container}>
              <Text>No QRs found</Text>
            </View>
          )
        }
      </ImageBackground>
    </View>
  )
}