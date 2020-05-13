import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
//configuracion
import Colors from '../config/colors';
import Constants from '../config/constants';

//componentes
import CVCasos from './CVCasos';


const CVCiudad = (props) => {
    const {ciudad,onChangeTextConf,onChangeTextSo } = props;
    return (
        <View style={styles.contenedor}>
            <Text style={styles.texto}>{ciudad} </Text>
            <CVCasos 
            typeCase={Constants.T1}
            onChangeText={onChangeTextConf} 
            placeholder={Constants.PLACEHOLDER}
            autoCorrect={false}
            secureTextEntry={false}
            placeholderTextColor={Colors.plomo3}
            />
            <CVCasos 
            typeCase={Constants.T2}
            onChangeText={onChangeTextSo} 
            placeholder={Constants.PLACEHOLDER}
            autoCorrect={false}
            secureTextEntry={false}
            placeholderTextColor={Colors.plomo3}
            />
        </View>

    );
};
const styles = StyleSheet.create({
    contenedor: {

        alignItems: 'center',
        paddingTop: 30,

    },
    texto: {
        fontWeight: 'bold',
    },

});

export default CVCiudad;