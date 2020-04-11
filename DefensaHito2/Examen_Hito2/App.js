/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
//Vistas
import CVScreen from './src/view/CVScreen';



const App: () => React$Node = () => {
  return (
   <View>
     <CVScreen></CVScreen>
   </View>
  );
};


export default App;
