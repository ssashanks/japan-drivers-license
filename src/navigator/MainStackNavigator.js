import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {  StyleSheet, View, Button, Text } from 'react-native';

import MainTabNavigator from './MainTabNavigator';
import LearnFullCard from '../components/LearnFullCard';


const MainStackNavigator = StackNavigator({
  MainTabNavigator: {
    screen: MainTabNavigator,
  },
  LearnFullCard: {
        screen: LearnFullCard,
    },
}, {
  headerMode: "none",
});

export default MainStackNavigator;