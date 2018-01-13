import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {  StyleSheet, View, Button, Text } from 'react-native';

import MainTabNavigator from './MainTabNavigator';
import LearnSwipeContainer from '../components/LearnSwipeContainer';
import TipFullCard from '../components/TipFullCard';
import { strings } from '../resources/Strings';

const MainStackNavigator = StackNavigator({
    MainTabNavigator: {
        screen: MainTabNavigator,
    },
    LearnSwipeContainer: {
        screen: LearnSwipeContainer,
    },
    TipFullCard: {
        screen: TipFullCard,
    },
});

export default MainStackNavigator;