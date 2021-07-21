import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CafesScreen from './CafesScreen';

const CafesStack = createStackNavigator();
const CafesNavigationStack = () => {
  return (
    <CafesStack.Navigator>
      <CafesStack.Screen name="Cafes" component={CafesScreen} options={{ title: "Cafes" }} />
    </CafesStack.Navigator>
  )
}

export default CafesNavigationStack;