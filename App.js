import React from "react";
import ContextExample from './src/ContextExample';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ContextExample}
      />
    </Stack.Navigator>
  );
}

export default function App() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
}