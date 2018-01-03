import React, { Component } from 'react';
import { Platform, StyleSheet, FlatList, Button, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { List, ListItem, Text } from 'react-native-elements';

//import TipListCard from './TipListCard';

export default class UserList extends React.Component {
    static navigationOptions = {
      title: "Me",
    };

    constructor(props) {
      super(props);
      this.state = {
        progresspercent: 0.79,
      };
      this.handleCardClick = this.handleCardClick.bind(this);
    }

    handleCardClick(param) {
      alert(param);
      //this.props.navigation.navigate("TipFullCard");
    }

    
    render() {
      const list = [
        {
          title: 'Clear all progress',
          icon: 'clear'
        },
        {
          title: 'About the developer',
          icon: 'info-outline'
        },
        {
          title: 'App version' ,
          icon: 'perm-device-information'
        },
      ];
      
      
      return (
          <View style={{flex: 1}}>
            <View style={{ flex: 1 }} >
              <View style={{flex: 3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Progress.Circle 
                  thickness={10}
                  showsText
                  progress={this.state.progresspercent} 
                  size={150} 
                  strokeCap="round" 
                  direction="counter-clockwise"
                  unfilledColor="#D3D3D3"
                  borderColor="#FFFF"
                  color="#4CAF50"/>
              </View>
              <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Text h4>Completed 80%</Text>
              </View>
            </View>
            <View style={{flex: 1, /*backgroundColor: 'skyblue'*/}}>
              <List>
                { list.map((item, i) => (
                    <ListItem
                      key={i}
                      title={item.title}
                      leftIcon={{name: item.icon}}
                    />
                  ))}
              </List>
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    
});