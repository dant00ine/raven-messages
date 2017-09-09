/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Raven extends Component{
  render(){
    <Image
      source = {require("raven.svg")}
    />
  }
}

class Roost extends Component {

  constructor(props){
    super(props);

    this.state = {
      ravens: props.count
    };
  }

  render() {

    var ravens = [];
    for(var i = 0; i < this.state.ravens; i++){
      ravens.push(<Raven />);
    }

    return (
      <View>
        {ravens}
        <Text>The Roost</Text>
      </View>
      
    );
    
  }
}

export default class RavenV2 extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Roost /> 
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

AppRegistry.registerComponent('RavenV2', () => RavenV2);
