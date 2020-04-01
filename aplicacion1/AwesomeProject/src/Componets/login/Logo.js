import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Logo from '../../image/donasangre.png';


export default class logo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <View style={styles.container}>
                    <Image source={Logo} style={styles.image}/>
                    <Text style={styles.text}>
                        Donar Sangre
                    </Text>
                </View>
            </>
        );
    }
}
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
        paddingBottom:50,
    },

});

