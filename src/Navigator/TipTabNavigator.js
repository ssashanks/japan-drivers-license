import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import TipList from '../components/TipList';
import TipFullCard from '../components/TipFullCard';


const TipTabNavigator = StackNavigator({
    TipList: {
        screen: TipList,
    },
    TipFullCard: {
        screen: TipFullCard,
    },
});

export default TipTabNavigator;