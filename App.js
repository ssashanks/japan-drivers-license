import React, { Component } from 'react';
//import MainTabNavigator from './src/navigator/MainTabNavigator'
import MainStackNavigator from './src/navigator/MainStackNavigator'

export default class App extends React.Component {
  render() {
    return (
      // <MainTabNavigator/>
      <MainStackNavigator/>
    );
  }
}