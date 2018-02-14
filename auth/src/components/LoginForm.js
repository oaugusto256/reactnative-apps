import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { 
    email: '',
    password: ''
  };

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder={'user@gmail.com'}
            label={'E-mail:'}
            value={this.state.text}
            onChangeText={email => this.setState({ email })}
          />  
        </CardSection>
        
        <CardSection>
          <Input
              secureTextEntry
              placeholder={'******'}
              label={'Password:'}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
        </CardSection>

        <CardSection>
          <Button buttonText="Login" />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;