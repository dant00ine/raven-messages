/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';
import styles from './style';

import Roost from './components/roost';

export default class RavenV2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Roost count={5} /> 
        <Text style={styles.welcome}>
          Welcome to React Native! WE HERE!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}



AppRegistry.registerComponent('RavenV2', () => RavenV2);
