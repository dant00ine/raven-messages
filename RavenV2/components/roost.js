import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import Raven from './raven';
import styles from '../style';

export default class Roost extends Component {
    constructor(props){
    super(props);

    this.state = {
      ravens: props.count
    };
  }

  render() {
    var ravens = [];
    for(var i = 0; i < this.state.ravens; i++){
      ravens.push(<Raven key={i} />);
    }

    return (
      <View style={styles.container}>
        <Text> 
          {ravens}
        </Text>
        <Text>The Roost</Text>
      </View>
    );
  }
}