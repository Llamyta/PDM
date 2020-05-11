import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image
} from 'react-native';
//imagenes
import Img from '../../assets/img2.png'
import Colors from '../config/colors'
import Constants from '../config/constants'
import Butons from './OnBoarding/ButtonPN'
import Desc from './OnBoarding/Description'

function DefensaHito3 ({ img,text,text1,text2,onPress,onPress2 }) {
    return (
        <View style={styles.container}>
            <View style={styles.texto}>
                <Desc
                    img={img}
                    text={text}
                    text1={text1}
                    text2={text2}

                />
            </View>
            <View style={styles.boton}>
                <Butons
                onPress={onPress}
                onPress2={onPress2}
                />
            </View>
        </View>
    );
};






const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
        
        height:'100%'
    },
    texto:{

    },
    boton:{
        paddingTop:570
    }
    
});
export default DefensaHito3;