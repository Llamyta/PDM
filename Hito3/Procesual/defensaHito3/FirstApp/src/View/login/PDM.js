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
import Img from '../../../assets/img1.png'
import Colors from '../../config/colors'
import colors from '../../config/colors';
import SplashScreen2 from '../../View/login/DefensaHito3'
import OnBoarding from '../../components/OnBoardingFactory'
import Constants from '../../config/constants'

const PDM = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <OnBoarding
                img={Img}
                text={Constants.STRINGS.IN}
                text1={Constants.STRINGS.IN2}
                text2={Constants.STRINGS.IN3}
                onPress={() => navigation.navigate('SplashScreen1')}
                onPress2={() => navigation.navigate('SplashScreen2')}
            />
        </View>
    );
};



const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.green,

    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    image: {
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
        paddingLeft: 200

    },
    signIn: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.white,
    },
    textSign: {
        color: Colors.white,
        textAlign: 'center',
        height: 20
    }
});
export default PDM;