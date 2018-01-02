import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView } from 'react-native';
import ListCard from './ListCard';

export default class CardList extends React.Component {
    static navigationOptions = {
      title: "Learn",
    };

    constructor(props) {
      super(props);
      this.handleCardClick = this.handleCardClick.bind(this);
    }

    handleCardClick(param) {
      this.props.navigation.navigate(param);
    }
  
    render() {
      return (
        <ScrollView>
          <ListCard onClick={this.handleCardClick} name="ABCD" progresspercent="50" progresspoints="50" progresstarget="50" />
          <ListCard onClick={this.handleCardClick} name="ABCD" progresspercent="50" progresspoints="50" progresstarget="50"/>
          <ListCard onClick={this.handleCardClick} name="ABCD" progresspercent="50" progresspoints="50" progresstarget="50"/>
          <ListCard onClick={this.handleCardClick} name="ABCD" progresspercent="50" progresspoints="50" progresstarget="50"/>
          <ListCard onClick={this.handleCardClick} name="ABCD" progresspercent="50" progresspoints="50" progresstarget="50"/>
          <ListCard onClick={this.handleCardClick} name="ABCD" progresspercent="50" progresspoints="50" progresstarget="50"/>
          <ListCard onClick={this.handleCardClick} name="ABCD" progresspercent="50" progresspoints="50" progresstarget="50"/>
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
    ListContainer: {
        flex: 1,
    },
    Card: {
      backgroundColor: '#000',
    }
});