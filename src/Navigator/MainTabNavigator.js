import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import { TabNavigator } from 'react-navigation';
import { TabBarBottom } from 'react-navigation';

import LearnList from '../components/LearnList';
import TipList from '../components/TipList';
import UserList from '../components/UserList';
import { strings } from '../resources/Strings';
import { color } from '../styles/CommonStyles';

class LearnTab extends React.Component {
    static navigationOptions = {
      tabBarLabel: strings.learn,
      title: strings.learn,
      //header: null,
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcon name="question-answer" size={25} color={tintColor}/>
      ),
    };
  
    render() {
      return (
        <View style={{ flex: 1}}>
            <LearnList navigation={this.props.navigation}/>
        </View>
      );
    }
}


class TipTab extends React.Component {
    static navigationOptions = {
      tabBarLabel: strings.tips,
      title: strings.tips,
      //header: null,
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcon name="drive-eta" size={25} color={tintColor}/>
      ),
    };
  
    render() {
      return (
        <TipList navigation={this.props.navigation}/>
      );
    }
}

class UserTab extends React.Component {
    static navigationOptions = {
      tabBarLabel: strings.me,
      title: strings.me,
      //header: null,
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcon name="person" size={25} color={tintColor}/>
      ),
    };
  
    render() {
      return (
        <UserList/>
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