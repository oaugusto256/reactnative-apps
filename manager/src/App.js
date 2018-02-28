
import React, { Component } from 'react';
import { Text,  View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyAuZvYeGpYIv7KxtPIrmcZzxlH-U08jIKQ',
      authDomain: 'manager-e718c.firebaseapp.com',
      databaseURL: 'https://manager-e718c.firebaseio.com',
      projectId: 'manager-e718c',
      storageBucket: 'manager-e718c.appspot.com',
      messagingSenderId: '946853046668'
    };

    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Manager
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
