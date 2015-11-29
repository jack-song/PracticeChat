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
  Dimensions,
  TextInput
} = React;

var ReceiverInput = React.createClass({
  getInitialState: function() {
    return {name: 'Luke Skywalker'};
  },
  render: function() {
    return(
      <TextInput
        style={{height: 50, borderColor: 'white', borderWidth: 1}}
        value={this.state.name}
        onChangeText={(text) => this.setState({name: text})}
        autoCorrect={false}
        textAlign='center'
      />
    );
  }
})

var textoutlet = React.createClass({
  getInitialMessages: function() {
    return [
      {text: 'What\'s on your mind?', name: 'TextOutlet', image: null, position: 'left', date: new Date(2015, 0, 16, 19, 0)}
    ];
  },
  handleSend: function(message = {}, rowID = null) {
    console.log('stuffyy');
  },
  onImagePress: function(rowData = {}, rowID = null){
    console.log('stuff');
  },
  handleReceive: function() {
    this._GiftedMessenger.appendMessage({
      text: 'Received message', 
      name: 'Friend', 
      image: {uri: 'https://facebook.github.io/react/img/logo_og.png'}, 
      position: 'left', 
      date: new Date(),
    });
  },
  render: function() {
    return (
      <View style={{backgroundColor: 'gray'}}>
        <ReceiverInput/>

        <GiftedMessenger
          ref={(c) => this._GiftedMessenger = c}

          initialMessages={this.getInitialMessages()}
          handleSend={this.handleSend}
          maxHeight={Dimensions.get('window').height - 50 - 50} // 50 for the navBar

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
      </View>
    );
  }
});

AppRegistry.registerComponent('textoutlet', () => textoutlet);
