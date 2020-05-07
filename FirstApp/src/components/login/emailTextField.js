import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput
} from 'react-native';
import Constants from '../../config/constants';
import Colors from '../../config/colors';
import Imagen from '../../config/images'
import constants from '../../config/constants';


function emailTextField({ onChange, placeholder }) {
  return (
    <View>
      <View style={styles.textFieldView}>
        <TextInput

          style={styles.textField}
          onChange={onChange}
          placeHolder={placeholder}
          selectionColor={Colors.blue}
          placeholderTextColor={Colors.black}
          autoCapitalize="none"
        >

        </TextInput>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  textField: {
    fontSize: 14,
    flex: 1,
    paddingLeft: 20,
    marginHorizontal: 20,
    color: Colors.black,
  },
  textFieldView: {
    height: Constants.CONFIG.HEADER_HEIGHT * 0.06,
    width: Constants.CONFIG.SCREEN_WIDTH * 0.85,
    marginTop: 5,
    marginBottom: 10,
    borderColor: "transparent",
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: Colors.white2,
    borderRadius: 15,
  },
});


export default emailTextField;