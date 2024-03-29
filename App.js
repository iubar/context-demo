import React from 'react';
import { StyleSheet, Button, View, Text, Alert } from 'react-native';
import ContextExample from './src/ContextExample';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={ContextExample} />
		</Stack.Navigator>
	);
}

export default function App() {
	if (false) {
		return (
			<NavigationContainer>
				<MyStack />
			</NavigationContainer>
		);
	}
	return (
		<View
			style={{
				flex: 1,
			}}>
			<ContextExample />
		</View>
	);
}
