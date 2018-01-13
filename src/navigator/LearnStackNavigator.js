import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {  StyleSheet, View, Button, Text } from 'react-native';

import LearnList from '../components/LearnList';
import LearnFullCard from '../components/LearnFullCard';
import { strings } from '../resources/Strings';

const LearnStackNavigator = StackNavigator({
    LearnList: {
        screen: LearnList,
    },
    LearnFullCard: {
        screen: LearnFullCard,
    },
});

export default LearnStackNavigator;