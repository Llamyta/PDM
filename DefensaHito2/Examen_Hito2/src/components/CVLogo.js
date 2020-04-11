import React, {Component} from 'react';
import {Text, View, Image,StyleSheet } from 'react-native';

//Imagenes
import Img from '../img/img.png';


class CVLogo extends Component{
    render(){
        return(
            <>
            <View style={styles.contenedor} >
                <Image source={Img} style={styles.img} />
                <Text style={styles.texto}>Epidemia Coronavirus</Text>
            </View>
            </>
        );
    }
}
const styles=StyleSheet.create({
    img:{
        width:100,
        height:100,
        resizeMode:'contain',
    },
    contenedor:{
        alignItems: 'center',
        paddingTop: 30,
    },
    texto:{
        paddingTop:10,
        fontWeight:'bold',
    },

});
export default CVLogo;