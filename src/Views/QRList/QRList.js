import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, SafeAreaView, FlatList, TextInput } from 'react-native';
import { QRItem } from '../../../components/QRItem';
import { styles } from './QRListStyles';

export function QRList() {
  const scannedQRs = useSelector(state => state.QRdata);
  const [inputSearch, setInputSearch] = useState('');


  function searchChange(event) {
    setInputSearch(event.target.value);
    console.log('el state inputSearch es:', inputSearch)
    return
  };

  const searchBar = scannedQRs.filter(e => {
    return e.newData.toLowerCase().includes(inputSearch.toLowerCase());
  });


  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChange={(event) => searchChange(event)}
        placeholder="Search by link..."
        value={inputSearch}
      />
      <View >
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={searchBar}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <QRItem
              id={index}
              url={item.newData}
              date={item.dateScanned} />
          )}
        />
      </SafeAreaView>
    </SafeAreaView>
  )
}