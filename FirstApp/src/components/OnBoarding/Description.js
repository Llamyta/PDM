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
import Img from '../../../assets/img2.png'
import Colors from '../../config/colors'
import Constants from '../../config/constants'

function DefensaHito3({ img, text, text1, text2 }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={img}
                    style={styles.image}
                />
            </View>


            <View style={styles.footer}>
                <Text style={styles.title}>{text}</Text>
                <Text style={styles.text}>{text1}</Text>
                <Text style={styles.text}>{text2}</Text>
            </View>
        </View>
    );
};



const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Naranja,
        

    },
    header: {
        flex: 1,
        paddingLeft:'50%'

    },
    footer: {
        flex: 1,
        paddingTop:'100%'
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    image: {
        flex: 0,
        //ajustar el contenido de la imagen
        resizeMode: 'stretch'
    },
    title: {
        alignSelf: 'center',
        color: Colors.white,
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        alignSelf: 'center',
        textAlign: 'center',
        color: Colors.white,
        fontSize: 18,
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 100,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    signIn: {
        width: '20%',
        alignItems: 'center',
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.white,
    },
    textSign: {
        color: Colors.white, textAlign: 'center', height: 20
    }
});
export default DefensaHito3;