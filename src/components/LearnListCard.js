import React, { Component } from 'react';
import { Platform, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Card, ListItem, Text } from 'react-native-elements';
import * as Progress from 'react-native-progress';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { color } from '../styles/CommonStyles';
import { strings } from '../resources/Strings';

export default class LearnListCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name || "Untitled",
      progresspercent: 0,
      progresspoints: 0,
      progresstarget: 0,
    };
    this.onCardPress = this.onCardPress.bind(this);
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

  onCardPress(e) {
    if(this.props.onClick) {
      this.props.onClick(this.state.id);
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onCardPress}>
        <Card containerStyle={{ justifyContent: 'center'}}>
          <View>
            <View style={styles.nameRow}>
              <Text style={styles.cardTitle}> { this.state.name.toUpperCase() } </Text>
              <MaterialIcon name="check-circle" size={22} color="#4CAF50" style={styles.completedIcon}/>
            </View>
            <Text style={styles.progressText}> { strings.learnprogresstext.formatUnicorn(this.state.progresspoints, this.state.progresstarget) } </Text>
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