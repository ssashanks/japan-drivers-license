import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { strings } from '../resources/Strings';
import { Card, ListItem, Text, Button } from 'react-native-elements';
import ls from '../styles/LearnStyles';
import { color } from '../styles/CommonStyles';
import PropTypes from 'prop-types';


export default class LearnCard extends React.Component {

    static propTypes = {
      //type: PropTypes.string.isRequired,
      image: PropTypes.number,
      question:  PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.number,
      })).isRequired,
      answer: PropTypes.number.isRequired,
    };

    constructor(props) {
      super(props);
      this.state = {
          type: this.props.type,
          question: this.props.question,
          options: this.props.options,
          answers:[],
      }
      //initialize boolean array of answers
      if(this.props.options) {
        for(var i=0; i < this.props.options.length; i++ ) {
           this.state.answers.push(0);
        }
      }
      this._imageCard = this._imageCard.bind(this);
      this._handleOptionClick = this._handleOptionClick.bind(this);
      this._getOptionColor = this._getOptionColor.bind(this);
      this._getOptionButtonStyle = this._getOptionButtonStyle.bind(this);
      this._getOptionTextColor = this._getOptionTextColor.bind(this);
    }

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.id,
    });
  
    _handleOptionClick(clickedOption) {
        var answers = this.state.answers;
        if((clickedOption +1) === this.props.answer) {
            answers[clickedOption] = 2;
        } else {
            answers[clickedOption] = 1;
        }
        this.forceUpdate();
    }

    _getOptionColor(index) {
        if(this.state.answers[index] === 0) {
            return color.white;
        } else if(this.state.answers[index] === 1) {
            return color.red;
        } else if(this.state.answers[index] === 2) {
            return color.green;
        }
    }

    _getOptionButtonStyle(index) {
        var style = [ls.learnCardOptionDefault];
        if(this.state.answers[index] === 1 || this.state.answers[index] === 2) {
            style.push({borderColor: color.white});
        }
        if(index === this.state.answers.length - 1) {
            style.push({ marginBottom: 20});
        }
        if(style.length == 1) {
            return ls.learnCardOptionDefault;
        }
        return style;
    }

    _getOptionTextColor(index) {
        if(this.state.answers[index] === 0) {
            return color.blue;
        } else {
            return null
        } 
    }

    _imageCard () {
        return (
            <Card
                title=' '
                image={this.props.image}
                imageProps={{resizeMode: "contain"}}
                imageStyle={{height: 125}}>
                {this.state.options.map((option, i) => {
                    return <Button
                    key={option.id}
                    backgroundColor={this._getOptionColor(i)}
                    fontFamily='Lato'
                    buttonStyle={this._getOptionButtonStyle(i)}
                    color={this._getOptionTextColor(i)}
                    title={option.text}
                    onPress={() => {this._handleOptionClick(i)}} />
                })}
            </Card>
        );
    }
    render() {
        if(this.state.type === "image") {
            return this._imageCard();
        } else {
        return (<Text>No Content</Text>);
        }
    }
}