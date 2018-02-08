import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyC5FJ8HkBIujuZaxKr4kmKSUD9i6403ZIw",
      authDomain: "auth-6b6e9.firebaseapp.com",
      databaseURL: "https://auth-6b6e9.firebaseio.com",
      projectId: "auth-6b6e9",
      storageBucket: "auth-6b6e9.appspot.com",
      messagingSenderId: "943881845234"
    });
  }

  render () {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
      );
  };
}

export default App;