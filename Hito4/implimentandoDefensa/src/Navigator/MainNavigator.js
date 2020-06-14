import * as React from 'react';
import {useState,useEffect} from 'react';
import * as firebase from "firebase";
import { Text } from 'react-native';
import Log from './NavLog';
import NavNotLog from './NavNotLog';


function mainNavigator() {
  const [login, setLogin] = useState(null);

  useEffect(() => {

    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogin(false) : setLogin(true);
    })
  }, []);
  if (login === null) {
    return (
      <Text>Cargando</Text>
    );
  }
  if (login) {
    return (
      <Log/>

    );
  }
  return (
    <NavNotLog/>
  );
}

export default mainNavigator;
