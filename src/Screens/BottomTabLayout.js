import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';

const Tab = createBottomTabNavigator();

const BottomTabLayout = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingTop: Platform?.OS === 'ios' ? 25 : 15,
          backgroundColor: 'white',
          position: 'absolute',
          overflow: 'hidden',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabLayout;
