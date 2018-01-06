import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {  StyleSheet, View, Button, Text } from 'react-native';

import UserList from '../components/UserList';
//import TipFullCard from '../components/TipFullCard';


const UserTabNavigator = StackNavigator({
    UserList: {
        screen: UserList,
    },
});

export default UserTabNavigator;