import React from 'react';
import { View, Text } from 'react-native';
import {ThemeContext, themes} from './ThemeContext';
import ThemedButton from './ThemedButton';
import ThemedButton2 from './ThemedButton2';

function CustomButton(props) {
    return (
      <ThemedButton onPress={props.customEvent} />
    );
  }

  function CustomButton2(props) {
    return (
      <ThemedButton2 title="Show context" />
    );
  }  

export default class ContextExample extends React.Component {

  state = {
    theme: themes.light, // valore iniziale
  };

    constructor(props) {
        super(props);
      }

        toggleTheme = () => {
          console.log("toggleTheme()..." + JSON.stringify(this.state.theme));
          this.setState(state => ({
            theme:
              state.theme === themes.dark
                ? themes.light
                : themes.dark,
          }));
        }

      render() {
        console.log('render() di ContextExample...' );
        let txt = JSON.stringify(this.state.theme);
        return (
          <View style={{flex: 1, alignItems:'center', justifyContent: 'center', padding: 20 }}>
            <ThemeContext.Provider value={{theme: this.state.theme, pippo: 'pluto'}}>
              <View style={{flex: 0, padding: 20 }}>
                <CustomButton customEvent={this.toggleTheme} />
              </View>
              <View style={{flex: 0, padding: 20 }}>
                <CustomButton2 customEvent={this.toggleTheme} />
              </View>
            </ThemeContext.Provider>
            <View style={{flex: 0, padding: 20 }}> 
              <Text>{txt}</Text>
            </View>
            </View>
 
        );
      }
    }