import React, { Component } from 'react';
import { Platform, StyleSheet, FlatList } from 'react-native';
import LearnListCard from './LearnListCard';

export default class LearnList extends React.Component {
    static navigationOptions = {
      title: "Learn",
    };

    constructor(props) {
      super(props);
      this.handleCardClick = this.handleCardClick.bind(this);
    }

    handleCardClick(param) {
      alert(param);
      this.props.navigation.navigate("LearnFullCard");
    }


    _keyExtractor = (item, index) => item.id;
    
    render() {
      var testCards = [
        { 
          id: "1", name: 'abcde', progresspercent: 80, progresspoints: 80, progresstarget: 80, click: this.handleCardClick,
        },
        { 
          id: "2", name: 'abcde', progresspercent: 80, progresspoints: 80, progresstarget: 80, click: this.handleCardClick,
        },
        { 
          id: "3", name: 'abcde', progresspercent: 80, progresspoints: 80, progresstarget: 80, click: this.handleCardClick,
        },
        { 
          id: "4", name: 'abcde', progresspercent: 80, progresspoints: 80, progresstarget: 80, click: this.handleCardClick,
        },
        { 
          id: "5", name: 'abcde', progresspercent: 80, progresspoints: 80, progresstarget: 80, click: this.handleCardClick,
        },
        { 
          id: "6", name: 'abcde', progresspercent: 80, progresspoints: 80, progresstarget: 80, click: this.handleCardClick,
        },
        { 
          id: "7", name: 'abcde', progresspercent: 80, progresspoints: 80, progresstarget: 80, click: this.handleCardClick,
        },
        { 
          id: "8", name: 'abcde', progresspercent: 80, progresspoints: 80, progresstarget: 80, click: this.handleCardClick,
        },
        { 
          id: "9", name: 'abcde', progresspercent: 80, progresspoints: 80, progresstarget: 80, click: this.handleCardClick,
        },
      ];

      return (
        <FlatList
          data={testCards}
          renderItem={({item}) => <LearnListCard onClick={item.click} id={item.id} name={item.name} progresspercent={item.progresspercent} progresspoints={item.progresspoints} progresstarget={item.progresstarget} />}
          keyExtractor={this._keyExtractor}
        />
      );
    }
}

const styles = StyleSheet.create({
    
});