
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
