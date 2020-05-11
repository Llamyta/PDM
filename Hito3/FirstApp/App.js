/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//npx react-native run-android
import React from 'react';
import LoginScreen from './src/View/login/login'
import {firebaseApp} from './src/plugins/firebase/firebase'
import MainNavigator from './src/navigator/mainNavigator';


const App: () => React$Node = () => {
  
  return (
    <>
        <MainNavigator/>
      
    </>
  );
};



export default App;
