import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Alert } from 'react-native';
import { ThemeContext } from './ThemeContext';
import { Button } from 'react-native-paper';

export default class ThemedButton extends React.Component {
	static contextType = ThemeContext;

	// clic = () => {
	//   console.log("clic()...");
	//   let context = this.context;
	//   console.log('...now the context is ' + JSON.stringify(context));
	// }

	render() {
		console.log('render() di ThemedButton...');
		let props = this.props;
		let theme = this.context.theme;
		//console.log('...theme is ' + JSON.stringify(theme));
		//console.log('...props are ' + JSON.stringify(props));
		return (
			<View style={{ justifyContent: 'center', textAlign: 'center' }}>
				<Button {...props} mode="contained" labelStyle={{ color: theme.foreground }} color={theme.background}>
					Toggle context
				</Button>
			</View>
		);
	}
}
