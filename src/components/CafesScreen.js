import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, FlatList } from 'react-native';
import pouchDB from '../../database';

const CafesScreen = () => {
  const [data, setData] = useState([]);

  pouchDB
    .changes({since: 'now', live: true})
    .on('change', showCafes);

  function showCafes() {
    console.log('show cafes')
    pouchDB.allDocs({ include_docs: true, descending: false }, function (err, doc) {
      console.log('got all docs...')
      /// Gotta map the fetched results into row items.
      const allCafes = doc.rows.map(item => item.doc);
      allCafes.forEach(item => console.log(item));
      /// Set state to trigger UI re-render.
      setData(allCafes);
    });
  }

  const renderItem = ({ item }) => {
    return (      
      <Text>Cafe: {item.name}</Text>
    )
  }

  return (
    <FlatList data={data} extraData={data} renderItem={renderItem} keyExtractor={item => item._id} />
  )
}

export default CafesScreen;