import React from 'react';
import { View, Text } from 'react-native';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';

function Toolbar(props) {
    return (
      <ThemedButton title="ok1" onPress={props.changeTheme}>
        Change Theme
      </ThemedButton>
    );
  }

export default class ContextExample extends React.Component {

  state = {
    theme: themes.light,
  };

    constructor(props) {
        super(props);
      }

        toggleTheme = () => {
          console.log("pressed..." + JSON.stringify(this.state.theme));
          this.setState(state => ({
            theme:
              state.theme === themes.dark
                ? themes.light
                : themes.dark,
          }));
        }

      render() {
        return (
          <View>
            <ThemeContext.Provider value={this.state.theme}>
              <Toolbar changeTheme={this.toggleTheme} />
            </ThemeContext.Provider>
            <View>
            <ThemedButton title="ok" />
            </View>
          </View>
        );
      }
    }