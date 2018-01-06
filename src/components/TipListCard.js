import React, { Component } from 'react';
import { Platform, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Card, ListItem, Text } from 'react-native-elements';
import * as Progress from 'react-native-progress';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { color } from '../styles/CommonStyles';
import { strings } from '../resources/Strings';

export default class TipListCard extends React.Component {

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
    if(nextProps.completed !== this.props.completed) { 
      this.setState({completed: this.props.completed});
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
          style={styles.completedIcon}/>);
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this._onCardPress}>
        <Card containerStyle={{ justifyContent: 'center'}}>
          <View>
            <View style={styles.nameRow}>
              <Text style={styles.cardTitle}> { this.state.name.toUpperCase() } </Text>
              {this._renderCompletedIcon()}
            </View>
            <Text style={styles.progressText}> { strings.tipprogresstext.formatUnicorn(this.state.progresspoints, this.state.progresstarget) } </Text>
            <View style={styles.progressBarContainer}>
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

const styles = StyleSheet.create({
  nameRow: {
    flexDirection: 'row'
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    paddingBottom: 15
  },
  completedIcon: {
    paddingTop: 4
  },
  progressText: {
    fontSize: 15,
    paddingBottom: 10
  },
  progressBarContainer: {
    paddingBottom: 20
  },
});