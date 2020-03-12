import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import logo from '../image/donasangre.png';


export default class Logo extends Component {

    constructor(props) {        
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.image} />
                <Text style={styles.text} >Donar</Text>
            </View>

        );

    }
};
const styles=StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        width: 80,
        height:80,
    },
    text:{
        color: 'white',
        fontWeight:'bold',
        backgroundColor:'transparent',
        marginTop:20,
    },

});