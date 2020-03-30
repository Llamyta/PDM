/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyComponent from './src/test/MyComponent';

import User from "./src/image/username.png"
import Pass from './src/image/password.png';

import Logo from './src/login/Logo';
import Input from './src/login/Input';
import Button from './src/login/Button';

const PASS=1;
const USER=2;

const App: () => React$Node = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
    <>
    <View style={styles.body}>
      <View style={styles.container}>
        <MyComponent style={styles.box} text="Cosa a mostrar"></MyComponent>
        <Logo />
        <Input
          source={User}
          placeholder="Username"
          secureTextEntry={false}
          autoCorrect={false}
          onChangeText={USER=>this.setState({USER})}
        />
         <Input
          source={Pass}
          placeholder="Password"
          secureTextEntry={false}
          autoCorrect={false}
          onChangeText={PASS=>this.setState({PASS})}
        />
        <Button pass={USER} user={PASS} style={styles.button}/>
      </View>
    </View>
  </>
  );
};

const styles = StyleSheet.create({
  //rosado f1414e
  //rosado claro f77e79
  //verde 4cbcb3
  //verde claro 9cdfd4
  //verde feo 70ffa2
  //plomo 2e2e2e
  //plomo claro basico c8c8c8
  //plomo claro basico 2 e1e0de
  //blanco f2f2f2
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#4cbcb3',
  },

  container: {
    flex: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  box: {
    height: 100,
  },


});

export default App;
