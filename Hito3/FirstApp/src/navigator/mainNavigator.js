import * as React from 'react';
import {useState,useEffect} from 'react';
import * as firebase from "firebase";

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Text } from 'react-native'

import LoginScreen from './RootStackScreen';
import Logueado from './NavLog';

const Stack = createStackNavigator();

function mainNavigator() {

  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogin(false) : setLogin(true);
    })
  }, []);

  if(login===null){
    return(<Text>Cargando...</Text>);
  }
  return login ? <Logueado/> : <LoginScreen/>;
}

export default mainNavigator;