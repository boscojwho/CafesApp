import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { Button, Text, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';
import pouchDB from '../../database';

const saveNewCafe = (navigation, name, location) => {
  const newCafeItem = {
    _id: new Date().toISOString(),
    name: name,
    location: location
  }
  pouchDB.put(newCafeItem, function callback(err, result) {
    if (!err) {
      console.log('Successfully posted a todo!');
      pouchDB.info().then(function (info) {
        console.log(info);
      })
      navigation.goBack()
    } else {
      console.log('Failed to save new cafe.')
    }
  });
}

const AddNewCafeScreen = ({ navigation }) => {
  const [cafeName, setCafeName] = useState("");
  const [location, setLocation] = useState("");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Save" onPress={ () => saveNewCafe(navigation, cafeName, location) } />
      ),
    });
  }, [navigation])

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Text style={Styles.textLabel}>Cafe Name</Text>
      <TextInput style={Styles.textInput} placeholder="e.g. JJ Bean" autoCorrect={false} onChangeText={(text) => {setCafeName(text)}}></TextInput>
      <Text style={Styles.textLabel}>Cafe Location</Text>
      <TextInput style={Styles.textInput} placeholder="e.g. East Van" autoCorrect={false} onChangeText={(text) => {setLocation(text)}}></TextInput>
    </KeyboardAvoidingView>
  )
}

const Styles = StyleSheet.create({
  textInput: {
    height: 44,
    margin: 8,
    borderWidth: 1,
    padding: 4
  },
  textLabel: {
    marginHorizontal: 8,
    marginTop: 8,
    padding: 2
  }
})

export default AddNewCafeScreen;