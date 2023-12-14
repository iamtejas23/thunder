import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import HomeScreen from './HomeScreen';
import SecurityScreen from './SecurityScreen';
import LessonsScreen from './LessonsScreen';
import ThreatMapScreen from './ThreatMapScreen';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const iconNames = ['home', 'lock', 'earth', 'book'];

  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const iconName = iconNames[index];
        const icon = <Icon name={iconName} size={24} color={isFocused ? '#00aaff' : 'white'} />;

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[styles.tabButton, isFocused ? styles.tabButtonFocused : null]}
          >
            {icon}
            <Text style={[styles.tabLabel, isFocused ? styles.tabLabelFocused : null]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Navbar = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Security" component={SecurityScreen} />
      <Tab.Screen name="Map" component={ThreatMapScreen} />
      <Tab.Screen name="Lessons" component={LessonsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  tabButtonFocused: {
    backgroundColor: '#2c2c2c', // Change to your desired color
    
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  tabLabel: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
  tabLabelFocused: {
    color: '#ffffff', // Change to your desired color
  },
});

export default Navbar;
