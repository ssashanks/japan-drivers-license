import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {  StyleSheet, View, Button, Text } from 'react-native';

import TipList from '../components/TipList';
import TipFullCard from '../components/TipFullCard';


const TipStackNavigator = StackNavigator({
    TipList: {
        screen: TipList,
    },
    TipFullCard: {
        screen: TipFullCard,
    },
});

export default TipStackNavigator;