import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {  StyleSheet, View, Button, Text } from 'react-native';

import LearnList from '../components/LearnList';
import LearnFullCard from '../components/LearnFullCard';


const LearnTabNavigator = StackNavigator({
    LearnList: {
        screen: LearnList,
    },
    LearnFullCard: {
        screen: LearnFullCard,
    },
});

export default LearnTabNavigator;