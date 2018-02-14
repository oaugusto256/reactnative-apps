import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { text: '' };

  render () { 
    return (
      <Card>
        <CardSection>
          <Input 
            label={'E-mail'}
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />  
        </CardSection>
        
        <CardSection>
        </CardSection>

        <CardSection>
          <Button buttonText="Login" />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;