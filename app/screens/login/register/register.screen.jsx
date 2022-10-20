import React, { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { HeaderComponent } from '../components/header/Header.component';
import { registerStyle } from './register.style';

export const RegisterScreen = (props = {navigation: ''}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const login = () => props.navigation.navigate('Login');
  const registrationSuccessful = () => {
    Alert.alert('Registration Successful. Please login!');
    setTimeout(() => props.navigation.navigate('Login'), 1500);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderComponent title="Register" />
        <View style={registerStyle.content}>
          <TextInput label="Name" onChangeText={text => setName(text)} />
          <TextInput
            onChangeText={text => setEmail(text)}
            label="Email"
            keyboardType="email-address"
          />
          <TextInput
            label="Password"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            right={
              <TextInput.Icon
                name="eye-off-outline"
                color={registerStyle.icon.color}
              />
            }
          />
          <TextInput
            label="Confirm Password"
            secureTextEntry={true}
            onChangeText={text => setConfirmPassword(text)}
            right={
              <TextInput.Icon
                name="eye-off-outline"
                color={registerStyle.icon.color}
              />
            }
          />
          <TextInput label="Phone Number" keyboardType="phone-pad" onChangeText={text => setPhone(text)}/>
          <Button
            mode="contained"
            style={registerStyle.button}
            onPress={registrationSuccessful}
            disabled={!(name, phone, email && password && confirmPassword)}>
            Register
          </Button>
          <Button onPress={login}>
            Already have an account? <Text style={{color: 'red'}}>Login</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
