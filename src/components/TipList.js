import React, { Component } from 'react';
import { Platform, StyleSheet, FlatList } from 'react-native';
import TipListCard from './TipListCard';
import { strings } from '../resources/Strings';

export default class TipList extends React.Component {
    static navigationOptions = {
      title: strings.tips,
    };

    constructor(props) {
      super(props);
      this.handleCardClick = this.handleCardClick.bind(this);
    }

    handleCardClick(param) {
      alert(param);
      this.props.navigation.navigate("TipFullCard");
    }


    _keyExtractor = (item, index) => item.id;
    
    render() {
      var testCards = [
        { 
          id: "1", name: 'abcde', progresspercent: 80, progresspoints: 80, progresstarget: 80, click: this.handleCardClick, completed: false,
        },
        { 
          id: "2", name: 'abcde', progresspercent: 80, progresspoints: 80, progresstarget: 80, click: this.handleCardClick, completed: true,
        },
        { 
          id: "3", name: 'abcde', progresspercent: 80, progresspoints: 80, progresstarget: 80, click: this.handleCardClick, completed: true,
        },
        { 
          id: "4", name: 'abcde', progresspercent: 80, progresspoints: 80, progresstarget: 80, click: this.handleCardClick, completed: true,
        },
        { 
          id: "5", name: 'abcde', progresspercent: 80, progresspoints: 80, progresstarget: 80, click: this.handleCardClick, completed: true,
        },
        { 
          id: "6", name: 'abcde', progresspercent: 80, progresspoints: 80, progresstarget: 80, click: this.handleCardClick, completed: true,
        },
        { 
          id: "7", name: 'abcde', progresspercent: 80, progresspoints: 80, progresstarget: 80, click: this.handleCardClick, completed: true,
        },
        { 
          id: "8", name: 'abcde', progresspercent: 80, progresspoints: 80, progresstarget: 80, click: this.handleCardClick, completed: true,
        },
        { 
          id: "9", name: 'abcde', progresspercent: 80, progresspoints: 80, progresstarget: 80, click: this.handleCardClick, completed: true,
        },
      ];

      return (
        <FlatList
          data={testCards}
          renderItem={({item}) => <TipListCard
                  onClick={item.click}
                  id={item.id}
                  name={item.name}
                  progresspercent={item.progresspercent}
                  progresspoints={item.progresspoints}
                  progresstarget={item.progresstarget}
                  completed={item.completed} />}
          keyExtractor={this._keyExtractor}
        />
      );
    }
}

const styles = StyleSheet.create({
    
});