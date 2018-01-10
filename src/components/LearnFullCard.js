import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { strings } from '../resources/Strings';
import { Card, ListItem, Text, Button } from 'react-native-elements';
import ls from '../styles/LearnStyles';

// import PropTypes from 'prop-types';

export default class LearnFullCard extends React.Component {

    // static propTypes = {
    //   lessonName: PropTypes.string.isRequired,
    // };

    constructor(props) {
      super(props);
      this.state = {
        lessonName: this.props.lessonName,
      }
    }

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.id,
    });
  
    render() {
      return (
        <View>
          <Card
            title=' '
            image={require('../resources/signs/stop.png')}
            imageProps={{resizeMode: "contain"}}
            imageStyle={{height: 125}}
            //imageWrapperStyle= {{backgroundColor: 'orange'}}
            >
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
                icon={{name: 'code'}}
                backgroundColor='#FFFF'
                fontFamily='Lato'
                buttonStyle={{borderRadius: 30, marginLeft: 0, marginRight: 0, marginBottom: 10, borderWidth: 1, borderColor: '#2196F3'}}
                color="#2196F3"
                title='VIEW NOW'
                onPress={() => {}} />
              <Button
                icon={{name: 'code'}}
                backgroundColor='#03A9F4'
                fontFamily='Lato'
                buttonStyle={{borderRadius: 30, marginLeft: 0, marginRight: 0, marginBottom: 10}}
                title='VIEW NOW' 
                onPress={() => {}} />
              <Button
                icon={{name: 'code'}}
                backgroundColor='#4CAF50'
                fontFamily='Lato'
                buttonStyle={{borderRadius: 30, marginLeft: 0, marginRight: 0, marginBottom: 10}}
                title='VIEW NOW' 
                onPress={() => {}} />
              <Button
                icon={{name: 'code'}}
                backgroundColor='#F44336'
                fontFamily='Lato'
                buttonStyle={{borderRadius: 30, marginLeft: 0, marginRight: 0, marginBottom: 10}}
                title='VIEW NOW' 
                onPress={() => {}} />
          </Card>
           {/* <Card containerStyle={ls.listCardContainer}>
            <View>
              <View style={ls.listCardNameRow}>
                <Text style={ls.listCardTitle}> { "this.state.name".toUpperCase() } </Text>
              </View>
            </View>
          </Card> */}

          {/* <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back"/> */}
        </View>
      );
    }
}
