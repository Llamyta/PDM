import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Colors from '../../config/colors';

class button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={stylesButton.container} onPress={this.props.onPress}>
                    <Text style={stylesButton.text}>{this.props.titleButton}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const stylesButton = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: Colors.white,
        paddingLeft:30,
        paddingRight:30,
    },
    text: { 
        color: Colors.white, 
        fontWeight:'bold',
        textAlign: 'center', 
        height: 20,

    },
});

button.propTypes = {};

export default button;
