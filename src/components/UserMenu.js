import React, { Component } from 'react';
import { Platform, View, TouchableNativeFeedback, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import PropTypes from 'prop-types';
import { List, ListItem, Text } from 'react-native-elements';

import us from '../styles/UserStyles';
import cs from '../styles/CommonStyles';
import { color } from '../styles/CommonStyles';

import { strings } from '../resources/Strings';
import Modal from 'react-native-modal';

export default class UserMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleModal: false,
        };
        this._handleMenuPress = this._handleMenuPress.bind(this);        
        this._renderAboutModal = this._renderAboutModal.bind(this);
        this._renderClearModal = this._renderClearModal.bind(this);
    }
    
    _handleMenuPress(itemkey) {
        if(itemkey === 'clear-progress') {
          this.setState({visibleModal: 1});
        } else if(itemkey === 'about-us') {
          this.setState({visibleModal: 2});
        }
    }
  
    _renderModalContent(type) {
        if(type === 1) {
            return (
            <View style={us.modal}>
                <View style={us.modalContent}>
                    <View style={us.modalMsg}>
                        <Text style={us.modalText}>{strings.clearprogressconfirm}</Text>
                    </View>
                </View>
                <View style={us.modalFooter}>
                    <TouchableWithoutFeedback onPress={() => { /* define delete here */}}>
                        <View style={us.modalHalfRed}>
                            <Text style={us.modalButtonText}>{strings.delete}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.setState({ visibleModal: null })}>
                        <View style={us.modalHalfBlue}>
                            <Text style={us.modalButtonText}>{strings.cancel}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            );
        } else if(type === 2) {
            return (
            <View style={[us.modal, {height: 265}]}>
                <View style={[us.modalContent, {height: 215}]}>
                    <View style={[cs.flex1,us.devImgContainer]}>
                        <Image style={us.devImg} source={require('../resources/images/dev.jpg')} />
                        <Text style={us.devName}> {strings.devname} </Text>
                    </View>
                    <View style={cs.flex1}>
                        <Text style={us.devBioHeading}>{strings.devBioHeading}</Text>
                        <Text style={us.devBio}>{strings.devBio}</Text>
                    </View>
                </View>
                <View style={us.modalFooter}>
                    <TouchableWithoutFeedback onPress={() => this.setState({ visibleModal: null })}>
                        <View style={us.modalFullBlue}>
                            <Text style={us.modalButtonText}>{strings.closeuppercase}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            );
        }
    }

    _renderClearModal() {
        return  <Modal isVisible={this.state.visibleModal === 1} children={this._renderModalContent(1)}/>
    }

    _renderAboutModal() {
        return  <Modal isVisible={this.state.visibleModal === 2} children={this._renderModalContent(2)}/>
    }
      
    _renderMenuList() {
        const list = [{
              title: strings.clearallprogress,
              icon: 'clear',
              key: 'clear-progress',
            }, {
              title: strings.aboutus,
              icon: 'info-outline',
              key: 'about-us',
            }, {
              title: strings.appversion,
              icon: 'perm-device-information',
              key: 'app-version',
              subtitle: "1.0.0-beta",
              hideChevron: true,
            },
        ];
       return (
       <List>
        { list.map((item, i) => (
            <TouchableNativeFeedback key={item.key} onPress={() => {this._handleMenuPress(item.key)}}>
                <ListItem
                key={item.key}
                title={item.title}
                leftIcon={{name: item.icon}}
                subtitle={item.subtitle}
                hideChevron={item.hideChevron}/>
            </TouchableNativeFeedback>
            ))}
        </List>);
    }
    
    render() {
      return (
        <View style={cs.flex1}>
            {this._renderMenuList()}
            {this._renderAboutModal()}
            {this._renderClearModal()}
        </View>
      );
    }
}

