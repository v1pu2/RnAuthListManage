import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ListScreen from '../Screens/ListScreen';
import BottomTabLayout from '../Screens/BottomTabLayout';
// import {HomeScreen} from '../screens/Home';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={BottomTabLayout}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
