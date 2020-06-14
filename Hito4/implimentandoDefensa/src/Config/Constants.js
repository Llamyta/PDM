import {Dimensions} from 'react-native';

const config = {
  SCREEN_WIDTH: Dimensions.get('window').width,
  SCREEN_HEIGHT: Dimensions.get('window').height,
  HEADER_HEIGHT: Dimensions.get('window').height - 46,
};

const strings = {
  NAME_APP: 'GooWia Solutions',
  PASSWORD: 'Password',
  USERNAME: 'Username',
  TITLE_BUTTON: 'LOG IN',
  REGISTER: 'Register',
  EMAIL: 'Email',
  EMAIL_ERROR: 'Email invalid!',
  PASSWORD_ERROR: 'Password invalid!',
  EMPTY_TITLE: 'Review Email/Password values',
  EMPTY_VALUES: 'Empty values detected',
  ADD_EMAIL: 'Enter Email',
  ADD_EMAIL_BUTTON: 'Add to Firestore',
  REVIEW_EMAIL: 'Please review email data',
  ENTER_EMAIL: 'Enter email value',
  REGISTER_FORM: 'REGISTER FORM',
  TITLE1:'Descubre lugares cerca',
  TEXT1:'Tendras todo al alcance de tu mano',
  TITLE2:'Selecciona tu comida',
  TEXT2:'Desde la comodidad de tu hogar',
  TITLE3:'Pide comida mas rapido',
  TEXT3:'Desde la comodidad de tu hogar',
  ADDText:'Add Some Text',
  NAMEPACK: 'Name Pakage',
};

export default {
  CONFIG: config,
  STRING: strings,
};
