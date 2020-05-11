import React, {Component, useState} from 'react';
import {StyleSheet, View, TextInput, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../config/colors';

class textInputForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <View>
        <View>
        <TextInput
          onChange={this.props.onChange}
          style={stylesTextInput.textInput}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCorrect={this.props.autoCorrect}
          placeholderTextColor={Colors.white}
          underlineColorAndroid="transparent"
        />
      </View>
      </View>
        
    );
  }
}
const stylesTextInput = StyleSheet.create({
  textInput: {
    marginTop:20,
    backgroundColor: Colors.white2,
    alignItems: 'center',
    height: 40,
    borderColor: Colors.White,
    paddingLeft: 40,
    borderRadius: 15,
    marginBottom: 20,
  },
 
});

textInputForm.propTypes = {
  placeholder: PropTypes.string.isRequired,
  autoCorrect: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
};

export default textInputForm;
