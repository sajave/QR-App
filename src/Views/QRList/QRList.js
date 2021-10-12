import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, SafeAreaView, FlatList, TextInput, Text, Image } from 'react-native';
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
        <Image
          source={require('../../../assets/Background/app-background-v001.png')}
          resizeMode='contain'
          style={{ width: 500, height: 800 }}
        />
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>You don{"'"}t have scanned QRs</Text>
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/Background/app-background-v001.png')}
        resizeMode='cover'
        style={{ with: 500, height: 900 }}
      />
      <TextInput
        style={styles.input}
        onChangeText={(event) => searchChange(event)}
        placeholder="Search by name..."
        value={inputSearch}
      />
      {searchBar.length > 0 ?
        (
          <SafeAreaView style={styles.container}>
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
          </SafeAreaView>
        ) : (
          <View style={styles.container}>
            <Text>No QRs found</Text>
          </View>
        )
      }
    </View>
  )
}