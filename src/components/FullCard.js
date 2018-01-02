import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button } from 'react-native';

export default class FullCard extends React.Component {
    static navigationOptions = {
        title: "Question 1",
    };
  
    render() {
      return (
        <View>
          <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back"
        />
        </View>
      );
    }
}
