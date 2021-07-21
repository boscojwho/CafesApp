import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CafesNavigationStack from './CafesStack';
import AddNewCafeNavigationStack from './AddNewCafeStack';

const RootStack = createStackNavigator();
const RootNavigationStack = () => {
  return (
    <RootStack.Navigator mode="modal" initialRouteName="CafesStack">
      {/* 
      Navigator can only have Screen components as direct children, 
      so we nest screen components that themselves have another navigator object
      */}
      <RootStack.Screen name="CafesStack" component={CafesNavigationStack} options={{ headerShown: false }} />
      <RootStack.Screen name="AddNewCafeStack" component={AddNewCafeNavigationStack} options={{ headerShown: false }} /> 
    </RootStack.Navigator>
  )
}

/// Responsible for managing a collection of stack navigators.
/// This component is structured such that we can modally present screens on iOS.
export default RootNavigationStack;