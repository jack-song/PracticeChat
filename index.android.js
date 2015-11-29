/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var GiftedMessenger = require('react-native-gifted-messenger');
var SendIntentAndroid = require('react-native-send-intent');
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
  clear: function() {
    this.setState({name: ''});
  },
  render: function() {
    return(
      <TextInput
        style={{height: 50, borderColor: 'white', borderWidth: 1}}
        value={this.state.name}
        onChangeText={(text) => this.setState({name: text})}
        autoCorrect={false}
        onFocus={this.clear}
        textAlign='center'
      />
    );
  }
})

var textoutlet = React.createClass({
  handleSend: function(message = {}, rowID = null) {
    this._GiftedMessenger.setMessageStatus('ErrorButton', rowID);
  },
  onImagePress: function(rowData = {}, rowID = null){
    console.log('stuff');
  },
  onErrorButtonPress: function (message, rowID) {
    SendIntentAndroid.sendText({
      title: 'Are you sure?',
      text: message.text,
      type: SendIntentAndroid.TEXT_PLAIN
    });

    this._GiftedMessenger.setMessageStatus('Sent...?', rowID);
  },
  render: function() {
    return (
      <View style={{backgroundColor: 'gray'}}>
        <ReceiverInput/>

        <GiftedMessenger
          ref={(c) => this._GiftedMessenger = c}

          handleSend={this.handleSend}
          maxHeight={Dimensions.get('window').height - 50 - 50} // 50 for the navBar
          inverted={false}
          onErrorButtonPress={this.onErrorButtonPress}
          onImagePress={this.onImagePress}
          senderImage={require('./static/delete.png')}

          styles={{
            bubbleLeft: {
              backgroundColor: '#e6e6eb',
              marginRight: 70,
            },
            bubbleRight: {
              backgroundColor: '#007aff',
              marginLeft: 70,
            }
          }}
        />
      </View>
    );
  }
});

AppRegistry.registerComponent('textoutlet', () => textoutlet);
