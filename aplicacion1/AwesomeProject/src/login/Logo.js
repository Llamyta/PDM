import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import logo from '../../assets/donasangre.png';


export default class Logo extends Component {

    constructor(props) {        
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.image} />
                <Text style={styles.text} >Donar Sangre</Text>
            </View>

        );

    }
};
const styles=StyleSheet.create({
    container: {
        
        paddingTop:100,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{  
        
        width: 200,
        height: 200,
        //ajustar el contenido de la imagen
        resizeMode: 'contain'
    },
    text:{
        color: 'white',
        fontWeight:'bold',
        backgroundColor:'transparent',
        marginTop:10,
        paddingBottom:50,
    },

});