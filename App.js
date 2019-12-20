import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ContextExample from './src/ContextExample';
 

const AppNavigator = createStackNavigator({
  Home: {
	screen: ContextExample
  }
});

export default createAppContainer(AppNavigator);