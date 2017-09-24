import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import TabMenu from './containers/TabMenu';

export default class App extends React.Component {
  render() {
    return (
    <View>
      <StatusBar translucent backgroundColor="red" />
      <Text>Shit!</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

console.disableYellowBox = true;
