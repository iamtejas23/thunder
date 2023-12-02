import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './Navbar'; // Import the navigation configuration from Navbar.js

const App = () => {
  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
};

export default App;
