import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import { TabNavigator } from 'react-navigation';
import { TabBarBottom } from 'react-navigation';

import LearnTabNavigator from './LearnTabNavigator'
import DriveTabNavigator from './DriveTabNavigator'
import UserTabNavigator from './UserTabNavigator'

class LearnTab extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Learn',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcon name="question-answer" size={25} color={tintColor}/>
      ),
    };
  
    render() {
      return (
        <View style={{ flex: 1}}>
            <LearnTabNavigator/>
        </View>
      );
    }
}


// class DriveTab extends React.Component {
//     static navigationOptions = {
//       tabBarLabel: 'Driving Tips',
//       tabBarIcon: ({ tintColor }) => (
//         <MaterialIcon name="drive-eta" size={25} color={tintColor}/>
//       ),
//     };
  
//     render() {
//       return (
//         <DriveTabNavigator/>
//       );
//     }
// }

// class UserTab extends React.Component {
//     static navigationOptions = {
//       tabBarLabel: 'Me',
//       tabBarIcon: ({ tintColor }) => (
//         <MaterialIcon name="person" size={25} color={tintColor}/>
//       ),
//     };
  
//     render() {
//       return (
//         <UserTabNavigator/>
//       );
//     }
// }

const MainTabNavigator = TabNavigator({
  LearnTab: {
    screen: LearnTab,
  },
//   DriveTab: {
//     screen: DriveTab,
//   },
//   UserTab: {
//     screen: UserTab,
//   }
}, {
  tabBarPosition: 'bottom',
  tabBarComponent: TabBarBottom,
  // swipeEnabled: false,
  // animationEnabled: false,
   backBehavior: 'none',
});

export default MainTabNavigator;