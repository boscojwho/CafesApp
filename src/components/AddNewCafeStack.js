import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import AddNewCafeScreen from './AddNewCafeScreen';

const AddNewCafeStack = createStackNavigator();
const AddNewCafeNavigationStack = () => {
  return (
    <AddNewCafeStack.Navigator initialRouteName="Add New Cafe">
      <AddNewCafeStack.Screen 
        name="Add New Cafe" 
        component={AddNewCafeScreen} 
        options={({ navigation }) => ({
          title: "Add New Cafe",
          headerLeft: () => (
            <Button title="Cancel" onPress={ () => navigation.goBack() } />
          )
        })} />
    </AddNewCafeStack.Navigator>
  )
}

export default AddNewCafeNavigationStack;