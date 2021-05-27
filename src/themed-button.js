import React from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import {ThemeContext} from './theme-context';

export default class ThemedButton extends React.Component {

  static contextType = ThemeContext;

  clic = () => {
    console.log("pressed...");
 
  }

  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <Button
        {...props}
         
        style={{backgroundColor: theme.background}}
      />
    );
  }
}
 