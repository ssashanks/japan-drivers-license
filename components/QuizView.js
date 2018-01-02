import React, { Component } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { Platform, StyleSheet, View, Button } from 'react-native';

export default class QuizView extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Quiz',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcon name="question-answer" size={25} color={tintColor}/>
      ),
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Button
          onPress={() => this.props.navigation.navigate('Drive')}
          title="Go to Driving Tips"
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