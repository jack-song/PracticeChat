/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var GiftedMessenger = require('react-native-gifted-messenger');
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} = React;

var textoutlet = React.createClass({
  getInitialMessages() {
    return [
      {text: 'What\'s on your mind?', name: 'TextOutlet', image: null, position: 'left', date: new Date(2015, 0, 16, 19, 0)}
    ];
  },
  handleSend(message = {}, rowID = null) {
    console.log('stuffyy');
  },
  onImagePress(rowData = {}, rowID = null){
    console.log('stuff');
  },
  handleReceive() {
    this._GiftedMessenger.appendMessage({
      text: 'Received message', 
      name: 'Friend', 
      image: {uri: 'https://facebook.github.io/react/img/logo_og.png'}, 
      position: 'left', 
      date: new Date(),
    });
  },
  render() {
    return (
      <GiftedMessenger
        ref={(c) => this._GiftedMessenger = c}

        initialMessages={this.getInitialMessages()}
        handleSend={this.handleSend}
        maxHeight={Dimensions.get('window').height - 64} // 64 for the navBar

        styles={{
          bubbleLeft: {
            backgroundColor: '#e6e6eb',
            marginRight: 70,
          },
          bubbleRight: {
            backgroundColor: '#007aff',
            marginLeft: 70,
          },
        }}
      />
    );
  }
});

AppRegistry.registerComponent('textoutlet', () => textoutlet);
