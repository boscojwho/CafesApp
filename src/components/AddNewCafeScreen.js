import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';

const AddNewCafeScreen = () => {
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