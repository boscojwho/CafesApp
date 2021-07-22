import * as React from 'react';
import 'react-native-gesture-handler';
import { Button, Text, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';
import pouchDB from '../../database';

const saveNewCafe = (navigation) => {
  const fakeItem = {
    _id: new Date().toISOString(),
    name: "Fake Cafe"
  }
  pouchDB.put(fakeItem, function callback(err, result) {
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
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Save" onPress={ () => saveNewCafe(navigation) } />
      ),
    });
  }, [navigation])

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Text style={Styles.textLabel}>Cafe Name</Text>
      <TextInput style={Styles.textInput} placeholder="e.g. JJ Bean" autoCorrect={false}></TextInput>
      <Text style={Styles.textLabel}>Cafe Location</Text>
      <TextInput style={Styles.textInput} placeholder="e.g. East Van" autoCorrect={false}></TextInput>
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