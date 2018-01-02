import React, { Component } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { Platform, StyleSheet, View, Button } from 'react-native';

export default class DriveView extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Driving Tips',
      tabBarIcon: ({ tintColor }) => (
        // <Image
        //   source={require('./images/user.png')}
        //   style={[styles.icon, {tintColor: tintColor}]}
        // />
        <MaterialIcon name="drive-eta" size={25} color={tintColor}/>
      ),
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Button
          onPress={() => this.props.navigation.navigate('User')}
          title="Go to User page"
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