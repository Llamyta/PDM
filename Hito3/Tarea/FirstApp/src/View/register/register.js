import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  TouchableOpacity
} from 'react-native';
import * as firebase from 'firebase';


const register = ({ navigation }) => {
  return (
    <View>
      <Text>Estas Logueado</Text>

      <TouchableOpacity  onPress={() => firebase.auth().signOut()}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>

  );
}

export default register;