import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import Colors from '../Theme/Colors';

const Tab = createBottomTabNavigator();

const BottomTabLayout = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          overflow: 'hidden',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: Colors.color2,
        },
        tabBarIconStyle: {display: 'none'},
        tabBarLabelStyle: {
          fontSize: 18,
          position: 'absolute',
          top: Platform?.OS === 'ios' ? 15 : 0,
          bottom: 0,
          left: 0,
          right: 0,
          textAlignVertical: 'center',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: Colors.color1,
          tabBarInactiveTintColor: Colors.color0,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarActiveTintColor: Colors.color1,
          tabBarInactiveTintColor: Colors.color0,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabLayout;
