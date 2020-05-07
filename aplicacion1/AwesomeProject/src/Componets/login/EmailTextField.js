import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import Constants from '../../Config/Constants';
import colors from '../../Config/colors';

const EmailTextField =({onChangeText, placeholder,onEndEditing,secureTextEntry,autoCorrect})=>{
    return(
        <>
            <View>
                <Text style={styles.errorText}/>
                <View style={styles.textFieldView}>
                    <TextInput style={styles.textField}
                    onChangeText={onChangeText}                    
                    onEndEditing={onEndEditing}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    autoCorrect={autoCorrect}
                    selectionColor={colors.blue}
                    placeholderTextColor={colors.white}
                    underlineColorAndroid="transparent"
                    >

                    </TextInput>
                </View>
            </View>
        </>
    );

}
const styles = StyleSheet.create({
    textField: {
      fontSize: 14,
      flex: 1,
      marginHorizontal: 20,
    },
    textFieldView: {
      height: Constants.CONFIG.HEADER_HEIGHT * 0.06,
      width: Constants.CONFIG.SCREEN_WIDTH * 0.85,
      borderRadius: 10,
      marginTop: 5,
      marginBottom: 10,
      borderColor: Colors.black2,
      borderWidth: 1,
      justifyContent: 'center',
      backgroundColor: Colors.silver,
    },
    errorText: {
      fontSize: 12,
      color: Colors.red,
      marginBottom: -5,
      marginHorizontal: 20,
    },
  });
  
export default EmailTextField;