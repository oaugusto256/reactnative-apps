// Import library to help to create a component 
import React from 'react';
import { AppRegistry, Text } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => {
	return <Header />;
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);