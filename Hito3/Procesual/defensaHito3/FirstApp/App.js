/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//npx react-native run-android
import React from 'react';
import RootStack from './src/navigator/RootStackScreen'
// import LoginScreen from './src/View/login/login'
// import MainScreen from './src/View/MainScreen'
// import {firebaseApp} from './src/plugins/firebase/firebase'
// import MainNavigator from './src/navigator/mainNavigator';


const App: () => React$Node = () => {
  
  return (
    <>
        <RootStack/>
      
    </>
  );
};



export default App;
