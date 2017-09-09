import React, { Component } from 'react';
import {
    Image
} from 'react-native';

export default class Raven extends Component {
    render() {
        return (
            <Image
            source = {require('../images/raven.png')}
            style = {{
                height: 50, 
                width: 50, 
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                flexDirection: 'row' 
              }}
            />
        );
    }
}