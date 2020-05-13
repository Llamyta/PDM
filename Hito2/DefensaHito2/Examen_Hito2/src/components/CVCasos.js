import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Colors from '../config/colors';
import PropTypes from 'prop-types';


const CVCasos = (props) => {

    const { typeCase, plaholder, onChangeText, secureTextEntry, autoCorrect } = props;

    return (
        <>
            <View style={styles.contenedor} >
                <Text style={styles.texto}>{typeCase}</Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    onChangeText={onChangeText}
                    placeholder={plaholder}
                    secureTextEntry={secureTextEntry}
                    autoCorrect={autoCorrect}
                />
            </View>
        </>
    );
};

CVCasos.propTypes = {
    onChangeText: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    autoCorrect: PropTypes.bool,
    secureTextEntry: PropTypes.bool
};

const styles = StyleSheet.create({
    contenedor: {

        alignItems: 'center',
        paddingTop: 5,
        paddingLeft: 150

    },
    texto: {
        fontWeight: 'bold',
        position: 'absolute',
        height: 50,
        left: 20,
        top: 9,


    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        alignItems: 'center',
        height: 40,
        width: 200,
        borderRadius: 10,
        borderColor: Colors.silver,


    },

});
export default CVCasos;
