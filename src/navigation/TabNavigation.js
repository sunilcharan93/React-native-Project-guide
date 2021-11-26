import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Home';
import ProfileScreen from '../screen/Profile';
import Setting from '../screen/Setting';
import Notification from '../screen/Notification';

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Setting" component={Setting} />
    <Tab.Screen name="Notification" component={Notification} />
  </Tab.Navigator>
);

export default TabNavigation;
