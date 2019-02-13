/**
 * HACKSPACE224
 * GanGan App
 */
import {createStackNavigator,createBottomTabNavigator,createAppContainer}   from 'react-navigation'
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import RadioScreen from './src/Screens/RadioScreen';
import NewsScreen from './src/Screens/NewsScreen';
import Navigation from './src/Navigation/Navigation';


export default class App extends Component{





  render() {
    // recuperer et mettre le navigation dans un container
 const Container = createAppContainer(Navigation)
    return (

        <Container/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
