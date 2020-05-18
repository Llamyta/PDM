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
import Img from '../../../assets/img3.png'
import Colors from '../../config/colors'
import OnBoarding from '../../components/OnBoardingFactory'
import Constants from '../../config/constants'

const FirebaseIntegration = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <OnBoarding
            img={Img}
            text={Constants.STRINGS.FB}
            text1={Constants.STRINGS.FB2}
            text2={Constants.STRINGS.FB3}
            onPress={() => navigation.navigate('SplashScreen2')}
            onPress2={() => navigation.navigate('Login')}
        />
    </View>
    );
};



const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue,

    },
    header: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingLeft: 150,
        zIndex: 1000
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: Colors.blue,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
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
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    signIn: {
        width:'20%',
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
export default FirebaseIntegration;