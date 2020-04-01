import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import ButtonLogin from '../../Componets/login/Button';
import TextInputLogin from '../../Componets/login/TextInput';
import LogoLogin from '../../Componets/login/Logo';

import Constants from '../../Config/Constants';
import Colors from '../../Config/colors';

import User from '../../image/username.png'
import Pass from '../../image/password.png'

class LoginScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
      };
      this._onPress = this._onPress.bind(this);
      this._onChangeTextUsername = this._onChangeTextUsername.bind(this);
      this._onChangeTextPassword = this._onChangeTextPassword.bind(this);
    }
  
    _onPress() {
      console.log('Presionado');
      console.log(this.state.username);
      console.log(this.state.password);
    }
    _onChangeTextUsername(username) {
      this.setState({
        username: username,
      });
    }
    _onChangeTextPassword(password) {
      this.setState({
        password: password,
      });
    }
    render() {
      return (
        <>
          <View style={stylesLoginScreen.container}>
          <LogoLogin style={stylesLoginScreen.logo} />
          <View style={stylesLoginScreen.form}>
            <TextInputLogin
              onChangeText={this._onChangeTextUsername}
              source={User}
              placeholder={Constants.USERNAME}
              secureTextEntry={false}
              autoCorrect={false}
            />
            <TextInputLogin
              onChangeText={this._onChangeTextPassword}
              source={Pass}
              placeholder={Constants.PASSWORD}
              secureTextEntry={true}
              autoCorrect={false}
            />
            <ButtonLogin
              onPress={this._onPress}
              titleButton={Constants.TITLE_BUTTON}
            />
          </View>
        </View>
        </>
      );
    }
  }
  const stylesLoginScreen = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.green,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {flex: 1, width: '100%', resizeMode: 'contain', alignSelf: 'center'},
    form: {flex: 1, justifyContent: 'center', width: '80%'},
  });
  
  export default LoginScreen;
  