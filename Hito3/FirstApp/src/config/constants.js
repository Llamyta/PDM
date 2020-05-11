import {Dimensions} from "react-native";
const config={
    HEADER_HEIGHT:Dimensions.get('window').height-45,
    SCREEN_WIDTH:Dimensions.get('window').width,
    SCREEN_HEIGHT:Dimensions.get('window').height,
};
const strings={
    PASSWORD:"Password",
    TITLE_BUTTON:"Login",
    EMAIL:"Correo Electronico",
    NEXT: "Next",
    PREV: "Prev",
    TD:"DEFENSA HITO 3",
    TD2:"Univ: William Barra",
    TD3:"Gestion 2020",
    FB:"FIREBASE",
    FB2:"Integracion de React Native",
    FB3:"con Firebase",
    IN:"PDM",
    IN2:"Programacion de Dispositivos",
    IN3:"Moviles-Unifranz",

}

export default {
    CONFIG:config,
    STRINGS:strings,
}