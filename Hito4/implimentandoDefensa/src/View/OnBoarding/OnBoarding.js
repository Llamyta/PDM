import React from 'react';
import LlamytasOnboarding from 'llamytasonboarding/src/View/Onboarding';
import IMG from '../../Config/Images';
import Colors from '../../Config/Colors'
import Constants from '../../Config/Constants'

const info = [
    {
        title: Constants.STRING.TITLE1,
        text: Constants.STRING.TEXT1,
        Img: IMG.IMAGE,
        color: Colors.white,
        textoBotonPrev: 'Skip',
        textoBotonNext: 'Next',
        colorFondo: Colors.blue,
        iconoNext: 'arrow-right',
        iconoPrev: 'close-circle'

    },
    {
        title: Constants.STRING.TITLE2,
        text: Constants.STRING.TEXT2,
        Img: IMG.IMAGE,
        color: Colors.blue,
        textoBotonPrev: 'Back',
        textoBotonNext: 'Next',
        colorFondo: Colors.white,
        iconoNext: 'arrow-right',
        iconoPrev: 'arrow-left',

    },
    {
        title: Constants.STRING.TITLE3,
        text: Constants.STRING.TEXT3,
        Img: IMG.IMAGE,
        color: Colors.white,
        textoBotonPrev: 'Back',
        textoBotonNext: 'Done',
        colorFondo: Colors.blue,
        iconoPrev: 'arrow-left',
        iconoNext: 'check'
    },
];
const OnBoarding = ({ navigation }) => {
    return (
        <>
            <LlamytasOnboarding
                data={info}
                onPressFinal={() => navigation.navigate('Login')}
                onPressDismiss={() => navigation.navigate('Login')}
            />
        </>
    );
};



export default OnBoarding;
