import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import { TabNavigator } from 'react-navigation';
import { TabBarBottom } from 'react-navigation';

import LearnTabNavigator from './LearnTabNavigator';
import TipTabNavigator from './TipTabNavigator';
import UserTabNavigator from './UserTabNavigator';

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


class TipTab extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Driving Tips',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcon name="drive-eta" size={25} color={tintColor}/>
      ),
    };
  
    render() {
      return (
        <TipTabNavigator/>
      );
    }
}

class UserTab extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcon name="person" size={25} color={tintColor}/>
      ),
    };
  
    render() {
      return (
        <UserTabNavigator/>
      );
    }
}

const MainTabNavigator = TabNavigator({

    LearnTab: {
      screen: LearnTab,
    },
    TipTab: {
      screen: TipTab,
    },
    UserTab: {
      screen: UserTab,
    }
  }, {
    labelStyle: {
    fontSize: 10,
  },
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    backBehavior: 'none',
    tabBarOptions: {
      labelStyle: {
        fontSize: 11,
      },
      activeTintColor: '#673AB7',
    }  
    // swipeEnabled: false,
    // animationEnabled: false,
    
  });

export default MainTabNavigator;