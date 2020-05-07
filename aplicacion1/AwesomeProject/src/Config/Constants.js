import { Dimensions } from 'react-native';

const config={
    SCREEN_WIDTH:Dimensions.get('window').width,
    SCREEN_HEIGHT:Dimensions.get('window').height,
    HEADER_WIDTH:Dimensions.get('window').height-45,
};

const strings={
    PASSWORD:"Password",
    USERNAME:"Username",
    TITLE_BUTTON:"LogIn",

};

export default {
    CONFIG:config,
    STRINGS:strings,   

}