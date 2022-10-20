import React, { useState } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { loginStyle } from './login.style';

export const LoginScreen = (props = {navigation: ''}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginSuccessful = () => Alert.alert('You are logged in.');

  const register = () => props.navigation.navigate('Register');

  const handleForgotPassword = () => {
    Alert.alert('A reset password link has been sent to your email.');
  };

  return (
    <SafeAreaView style={loginStyle.content}>
      <View style={loginStyle.view}>
        <Card>
          <Card.Title title="Delivery App" titleStyle={loginStyle.cardTitle}>
            Login
          </Card.Title>
          <Card.Content>
            <TextInput
              label="Email"
              keyboardType="email-address"
              onChangeText={text => setEmail(text)}></TextInput>
            <TextInput
              label="Password"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}></TextInput>
            <Button
              uppercase={false}
              style={loginStyle.cardButton}
              onPress={handleForgotPassword}>
              Forgot Email/Password
            </Button>
            <Button
              mode="contained"
              style={loginStyle.cardButton}
              onPress={loginSuccessful}
                disabled={!(email && password)}>
              Login
            </Button>
            <Button style={loginStyle.cardButton} onPress={register}>
              Register
            </Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};
