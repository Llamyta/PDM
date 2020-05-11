import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Alert
} from 'react-native';
import * as firebase from 'firebase';

import ButtonLogin from '../../components/login/button';
import TextInputLogin from '../../components/login/textInput';
import EmailTextField from '../../components/login/emailTextField';

import LogoLogin from '../../components/login/logo';
import DismissKeyboard from '../../components/login/dismissKeyboard';
import Constants from '../../config/constants';
import Colors from '../../config/colors';
import { validateEmail } from '../../utils/utils';
import colors from '../../config/colors';


const login = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    if (!email || !password) {
      Alert.alert("Todos los campos son oblogatorios");
    }
    else {
      if (!validateEmail(email)) {
        Alert.alert("El E-Mail no es valido");
      }
      else {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            Alert.alert("Login correcto");

          })
          .catch(() => {
            Alert.alert("Error al Iniciar Sesion");
          })

      }
    }

  }
  return (
    <DismissKeyboard>
      <KeyboardAvoidingView
        style={stylesLoginScreen.container}
        behavior="height"
        enabled>
        <View style={stylesLoginScreen.container}>
          {/* <View style={stylesLoginScreen.contenedor}>
            
      <Text style={stylesLoginScreen.texto}>{Constants.STRINGS.AUX}</Text>
          </View> */}
          <SafeAreaView>
            <LogoLogin style={stylesLoginScreen.logo} />
            <View style={stylesLoginScreen.form}>
              <EmailTextField
                onChange={e => setEmail(e.nativeEvent.text)}
                placeholder={Constants.STRINGS.EMAIL}
              />


              <TextInputLogin
                onChange={e => setPassword(e.nativeEvent.text)}
                placeholder={Constants.STRINGS.PASSWORD}
                autoCapitalize="none"
                secureTextEntry={true}
                autoCorrect={false}
              />
              <ButtonLogin
                onPress={login}
                titleButton={Constants.STRINGS.TITLE_BUTTON}
              />
            </View>
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>

  );
}
login.propTypes = {

};
const stylesLoginScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',

  },
  logo: { flex: 1, width: '100%', resizeMode: 'contain', alignSelf: 'center' },
  form: { flex: 1, justifyContent: 'center', width: '80%' },
  texto: { fontWeight:'bold',fontSize:20,paddingTop:15, color:Colors.white },
  contenedor:
  {
    backgroundColor: colors.blue,
    width: '100%',
    alignSelf:'flex-start',

  }
});
export default login;