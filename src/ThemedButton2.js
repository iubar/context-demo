import React from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import {ThemeContext } from './ThemeContext';

export default class ThemedButton2 extends React.Component {
  
  clic = (context) => {
     
    console.log('clic()...the context is ' + JSON.stringify(context));
    Alert.alert(JSON.stringify(context));
  }

  render() {
    console.log('render() di ThemedButton2...' );
    let props = this.props;
 
    // console.log('...theme is ' + JSON.stringify(theme));
    // console.log('...props are ' + JSON.stringify(props));
    return (     
      <ThemeContext.Consumer>
        {(context) => (
      <View style={{justifyContent: 'center', textAlign: 'center'}}>        
      <Button
        {...props}        
        style={{paddingVertical: 12, paddingHorizontal: 32, fontSize: 116, backgroundColor: context.theme.background, color: context.theme.foreground}}
        color={context.theme.background}
        onPress={() => this.clic(context)}
      />
      </View>
      )}
      </ThemeContext.Consumer>
    );
  }
}
 