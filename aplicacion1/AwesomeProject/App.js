/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MyComponent from './src/test/MyComponent';
import Logo from './src/login/Logo';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.container}>
          <MyComponent text="Hola mundo desde react native" style={styles.box} />
          <MyComponent text="Soy hermosa" style={styles.box} />
          <Logo />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.primary,
  },
  box: {
    height: 100,
  },
  container: {
    flex: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default App;
