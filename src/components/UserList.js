import React, { Component } from 'react';
import { Platform, View } from 'react-native';

import UserProgress from './UserProgress';
import UserMenu from './UserMenu';
import cs from '../styles/CommonStyles';
import { strings } from '../resources/Strings';

//import TipListCard from './TipListCard';

export default class UserList extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        progresspercent: this.props.progresspercent || 79,
      };
    }
    
    render() {
      return (
          <View style={cs.flex1}>
            <UserProgress progresspercent={this.state.progresspercent} />
            <UserMenu />
        </View>
      );
    }
}

