/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import ThemeProvider, { applyTheme } from 'react-native-theme-provider';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

@applyTheme()
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={[styles.instructions, this.props.theme.styles]}>
          {instructions}
        </Text>
        <Button
          title="Toggle Theme"
          onPress={() => {
            this.props.activeTheme(this.props.theme.current === 'default' ? 'red' : 'default');
          }}
        />
      </View>
    );
  }
}

export default () => {
  return (
    <ThemeProvider
      themes={{
        'default': {
          color: '#333333',
        },
        'red': {
          color: 'red',
        },
      }}
      onChange={(name, before, after) => {
        console.log(before)
        console.log(after)
      }}
    >
      <App />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
