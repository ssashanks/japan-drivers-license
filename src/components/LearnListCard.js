import React, { Component } from 'react';
import { Platform, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Card, ListItem, Text } from 'react-native-elements';
import * as Progress from 'react-native-progress';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { color } from '../styles/CommonStyles';
import { strings } from '../resources/Strings';
import ls from '../styles/LearnStyles'

export default class LearnListCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name || "Untitled",
      progresspercent: this.props.progresspercent || 0,
      progresspoints: this.props.progresspoints || 0,
      progresstarget: this.props.progresstarget || 0,
      completed: this.props.completed,
    };
    this._onCardPress = this._onCardPress.bind(this);
    this._renderCompletedIcon = this._renderCompletedIcon.bind(this);
  }

  componentDidMount() {
    this.setState({
      progresspercent: this.props.progresspercent || 0,
      progresspoints: this.props.progresspoints || 0,
      progresstarget: this.props.progresstarget || 0,
    });
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.id !== this.props.id) { 
      this.setState({id: this.props.id});
    }
    if(nextProps.name !== this.props.name) { 
      this.setState({name: this.props.name});
    }
    if(nextProps.progresspercent !== this.props.progresspercent) { 
      this.setState({progresspercent: this.props.progresspercent});
    }
    if(nextProps.progresspoints !== this.props.progresspoints) { 
      this.setState({progresspoints: this.props.progresspoints});
    }
    if(nextProps.progresstarget !== this.props.progresstarget) { 
      this.setState({progresstarget: this.props.progresstarget});
    }
  }

  _onCardPress(e) {
    if(this.props.onClick) {
      this.props.onClick(this.state.id);
    }
  }

  _renderCompletedIcon() {
    if(this.state.completed) {
      return (
        <MaterialIcon 
          name="check-circle"
          size={22}
          color={color.green}
          style={ls.listCardCompletedIcon}/>);
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this._onCardPress}>
        <Card containerStyle={ls.listCardContainer}>
          <View>
            <View style={ls.listCardNameRow}>
              <Text style={ls.listCardTitle}> { this.state.name.toUpperCase() } </Text>
              {this._renderCompletedIcon()}
            </View>
            <Text style={ls.listCardProgressText}> { strings.learnprogresstext.formatUnicorn(this.state.progresspoints, this.state.progresstarget) } </Text>
            <View style={ls.listCardProgressBarContainer}>
              <Progress.Bar 
                progress={(this.state.progresspercent < 0 ? 0: this.state.progresspercent > 100? 100: this.state.progresspercent) * 0.01} 
                width={null}
                height={15}
                unfilledColor={color.gray}
                borderColor={color.white}
                color={color.green} />
            </View>
          </View>
        </Card>
      </TouchableWithoutFeedback>
    );
  }
}