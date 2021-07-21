import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddNewCafeScreen from './AddNewCafeScreen';

const AddNewCafeStack = createStackNavigator();
const AddNewCafeNavigationStack = () => {
  return (
    <AddNewCafeStack.Navigator initialRouteName="Add New Cafe">
      <AddNewCafeStack.Screen name="Add New Cafe" component={AddNewCafeScreen} options={{ title: "Add New Cafe" }} />
    </AddNewCafeStack.Navigator>
  )
}

export default AddNewCafeNavigationStack;