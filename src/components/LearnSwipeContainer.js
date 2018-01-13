import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { strings } from '../resources/Strings';
import { Card, ListItem, Text, Button } from 'react-native-elements';
import LearnCard from '../components/LearnCard';
import cs from '../styles/CommonStyles';


export default class LearnSwipeContainer extends React.Component {

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
      var options = [{
        text: "OPTION ONE",
        id: 1,
      },
      {
        text: "OPTION TWO",
        id: 2,
      },
      {
        text: "OPTION THREE",
        id: 3,
      },    
      {
        text: "OPTION FOUR",
        id: 4,
      },
    ];
      return (
        <View style={[cs.flex1, {justifyContent: 'center'}]}>
          <LearnCard type="image" image={require("../resources/signs/stop.png")} options={options} answer={1}/>
        </View>
      );
    }
}
