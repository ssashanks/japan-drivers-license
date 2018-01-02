import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {  StyleSheet, View, Button, Text } from 'react-native';

import CardList from '../components/CardList';
import FullCard from '../components/FullCard';


const LearnTabNavigator = StackNavigator({
    CardList: {
        screen: CardList,
    },
    Card: {
        screen: FullCard,
    },
});

export default LearnTabNavigator;