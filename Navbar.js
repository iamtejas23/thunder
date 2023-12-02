import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import SecurityScreen from './SecurityScreen';
import LessonsScreen from './LessonsScreen';
import ThreatMapScreen from './ThreatMapScreen'; // Import the ThreatMap screen


const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Security') {
            iconName = 'lock';
          } else if (route.name === 'Lessons') {
            iconName = 'book';
          } else if (route.name === 'Map') {
            iconName = 'earth';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
     
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Security" component={SecurityScreen} />
      <Tab.Screen name="Map" component={ThreatMapScreen} />
      <Tab.Screen name="Lessons" component={LessonsScreen} />
      
    </Tab.Navigator>
  );
};

export default Navbar;
