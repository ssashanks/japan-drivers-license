import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';
import { Text } from 'react-native-elements';

import us from '../styles/UserStyles';
import cs from '../styles/CommonStyles';

import { color } from '../styles/CommonStyles';
import { strings } from '../resources/Strings';

export default class UserList extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        progresspercent: 0,
      };
    }

    componentDidMount() {
        this.setState({ progresspercent: this.props.progresspercent || 0 });
    }
    
    render() {   
      return (
        <View style={cs.flex1} >
            <View style={us.progressCircleContainer}>
                <Progress.Circle 
                    thickness={10}
                    showsText
                    progress={(this.state.progresspercent > 100? 100: this.state.progresspercent < 0 ? 0: this.state.progresspercent) *0.01 } 
                    size={150} 
                    strokeCap="round" 
                    direction="counter-clockwise"
                    unfilledColor={color.gray}
                    borderColor={color.white}
                    color={color.green}/>
            </View>
            <View style={us.progressTextContainer}>
                <Text h4>{strings.completedpercent.formatUnicorn(this.state.progresspercent)}</Text>
            </View>
        </View>
      );
    }
}

UserList.propTypes = {
    progresspercent: PropTypes.number.isRequired,
};