import React, { Component } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { Platform, StyleSheet, View, Button } from 'react-native';

export default class UserView extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcon name="person" size={25} color={tintColor}/>
      ),
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});