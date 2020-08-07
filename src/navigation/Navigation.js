import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapScreen from '../screens/MapScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Map'} component={MapScreen}/>
        <Tab.Screen name={'Search'} component={SearchScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
