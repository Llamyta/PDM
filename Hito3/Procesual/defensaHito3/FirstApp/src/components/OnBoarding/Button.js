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
                <TouchableOpacity
                    style={[stylesButton.container, this.props.styleButton]}
                    onPress={this.props.onPress}
                >
                    <Text
                        style={[stylesButton.text, this.props.styleButton]}
                    >
                        {this.props.titleButton}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const stylesButton = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: '8%',
        paddingVertical: '22%',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

button.propTypes = {};

export default button;
