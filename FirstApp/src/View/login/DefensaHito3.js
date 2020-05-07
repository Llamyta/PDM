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
import OnBoarding from '../../components/OnBoardingFactory'

const DefensaHito3 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <OnBoarding
                img={Img}
                text={Constants.STRINGS.TD}
                text1={Constants.STRINGS.TD2}
                text2={Constants.STRINGS.TD3}
                onPress={() => navigation.navigate('SplashScreen1')}
                onPress2={() => navigation.navigate('SplashScreen3')}
            />
        </View>
    );
}



const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Naranja,

    },
});
export default DefensaHito3;