import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { TabBarBottom } from 'react-navigation';

import QuizView from './components/QuizView'
import DriveView from './components/DriveView'
import UserView from './components/UserView'

const MyApp = TabNavigator({
  Quiz: {
    screen: QuizView,
  },
  Drive: {
    screen: DriveView,
  },
  User: {
    screen: UserView,
  }
}, {
  tabBarPosition: 'bottom',
  tabBarComponent: TabBarBottom,
  // swipeEnabled: false,
  // animationEnabled: false,
  // backBehavior: 'none',
});


export default MyApp;
