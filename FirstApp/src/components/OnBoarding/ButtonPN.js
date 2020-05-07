import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Colors from '../../config/colors';
import Button from './Button';
import constants from '../../config/constants';

class button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <View style={styles.button}>
        <Button 
        titleButton={constants.STRINGS.PREV}
        onPress={this.props.onPress}
        />
        <Button 
        titleButton={constants.STRINGS.NEXT}
        onPress={this.props.onPress2}
        />

        {/* <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
          <Text style={styles.text}>{this.props.titleButton2}</Text>
        </TouchableOpacity> */}

      </View>
    );
  }
}
const styles = StyleSheet.create({
    button: {
        marginTop: 100,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        width: '50%',
        alignItems: 'center',
        
  },
  });

button.propTypes = {};

export default button;
