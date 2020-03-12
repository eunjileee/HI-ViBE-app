import { SimpleLineIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import styled from 'styled-components/native';
// import { Image } from 'react-native';

import Chart from '../screens/ChartScreen';
import Home from '../screens/HomeScreen';
import Search from '../screens/SearchScreen';
import Settings from '../screens/SettingsScreen';
import Theme from '../screens/ThemeScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let home: string;
            let trophy: string;
            let disc: string;
            let magnifier: string;
            let heart: string;

            if (route.name === 'Home') {
              home = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              return <SimpleLineIcons name="home" color={color} size={size} />;
            } else if (route.name === 'Chart') {
              trophy = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              return (
                <SimpleLineIcons name="trophy" color={color} size={size} />
              );
            } else if (route.name === 'Theme') {
              disc = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              return <SimpleLineIcons name="disc" color={color} size={size} />;
            } else if (route.name === 'Search') {
              magnifier = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              return (
                <SimpleLineIcons name="magnifier" color={color} size={size} />
              );
            } else if (route.name === 'Settings') {
              heart = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              return <SimpleLineIcons name="heart" color={color} size={size} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ff0050',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: 'black',
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Chart" component={Chart} />
        <Tab.Screen name="Theme" component={Theme} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
