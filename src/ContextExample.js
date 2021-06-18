import React from 'react';
import { View, Text } from 'react-native';
import {ThemeContext, themes} from './ThemeContext';
import ThemedButton from './ThemedButton';
import ThemedButton2 from './ThemedButton2';

function Toolbar(props) {
    return (
      <ThemedButton onPress={props.changeTheme} />
    );
  }

  function Toolbar2(props) {
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
          <View style={{flex: 1}}>
            <ThemeContext.Provider value={{theme: this.state.theme, pippo: 'pluto'}}>
              <Toolbar changeTheme={this.toggleTheme} />
              <Toolbar2 changeTheme={this.toggleTheme} />
            </ThemeContext.Provider>
            <Text>{txt}</Text>
            </View>
 
        );
      }
    }