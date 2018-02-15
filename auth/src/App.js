import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };
    
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC5FJ8HkBIujuZaxKr4kmKSUD9i6403ZIw",
      authDomain: "auth-6b6e9.firebaseapp.com",
      databaseURL: "https://auth-6b6e9.firebaseio.com",
      projectId: "auth-6b6e9",
      storageBucket: "auth-6b6e9.appspot.com",
      messagingSenderId: "943881845234"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent () {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button buttonText={'Logout'} />
          </ CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return(
          <Spinner/>
      );
    }

    
  }

  render () {
    return (
      <View>
        <View style={{ marginBottom: 30 }}>
          <Header headerText="Authentication" />
        </View>
        <View>
          {this.renderContent()}
        </View>
      </View>  
      );
  };
}

export default App;