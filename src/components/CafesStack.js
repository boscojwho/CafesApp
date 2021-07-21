import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import CafesScreen from './CafesScreen';

const CafesStack = createStackNavigator();
const CafesNavigationStack = () => {
  return (
    <CafesStack.Navigator initialRouteName="Cafes">
      <CafesStack.Screen 
        name="Cafes" 
        component={CafesScreen} 
        options={({ navigation }) => ({ /// Pass in a navigation prop so we can customize the navigation bar.
          title: "Cafes",
          headerRight: () => ( /// Return inside parentheses (not curly braces), it needs a component and not a function (?).
            <Button title="New" onPress={ () => navigation.navigate('AddNewCafeStack') } />
          )
        })} />
    </CafesStack.Navigator>
  )
}

export default CafesNavigationStack;