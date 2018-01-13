import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import { TabNavigator } from 'react-navigation';
import { TabBarBottom } from 'react-navigation';

import LearnStackNavigator from './LearnStackNavigator';
import TipStackNavigator from './TipStackNavigator';
import UserStackNavigator from './UserStackNavigator';
import { strings } from '../resources/Strings';
import { color } from '../styles/CommonStyles';

class LearnTab extends React.Component {
    static navigationOptions = {
      tabBarLabel: strings.learn,
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcon name="question-answer" size={25} color={tintColor}/>
      ),
    };
  
    render() {
      return (
        <View style={{ flex: 1}}>
            <LearnStackNavigator/>
        </View>
      );
    }
}


class TipTab extends React.Component {
    static navigationOptions = {
      tabBarLabel: strings.tips,
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcon name="drive-eta" size={25} color={tintColor}/>
      ),
    };
  
    render() {
      return (
        <TipStackNavigator/>
      );
    }
}

class UserTab extends React.Component {
    static navigationOptions = {
      tabBarLabel: strings.me,
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcon name="person" size={25} color={tintColor}/>
      ),
    };
  
    render() {
      return (
        <UserStackNavigator/>
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
    //lazy: true,
    tabBarOptions: {
      labelStyle: {
        fontSize: 11,
      },
      activeTintColor: color.darkblue,
    }  
    // swipeEnabled: false,
    // animationEnabled: false,
    
  });

export default MainTabNavigator;