import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo';
// import style from './style.js';

class ProgramPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={{marginTop: Constants.statusBarHeight}}>
          Shit here in the program
        </Text>
      </View>
    );
  }
}


export default ProgramPage;
