import { SimpleLineIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

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
        initialRouteName="Home"
        tabBarOptions={{
          showLabel: false,
          activeBackgroundColor: 'black',
          inactiveBackgroundColor: 'black',
          activeTintColor: '#ff1150',
          style: {
            paddingTop: 5,
            backgroundColor: 'black',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <SimpleLineIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Chart"
          component={Chart}
          options={{
            tabBarIcon: ({ color, size }) => (
              <SimpleLineIcons name="trophy" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Theme"
          component={Theme}
          options={{
            tabBarIcon: ({ color, size }) => (
              <SimpleLineIcons name="disc" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ color, size }) => (
              <SimpleLineIcons name="magnifier" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <SimpleLineIcons name="heart" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
