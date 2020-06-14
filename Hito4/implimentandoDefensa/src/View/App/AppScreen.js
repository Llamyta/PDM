import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Text, StatusBar } from 'react-native';
import * as firebase from 'firebase'

import CTextField from '../../Components/CTextField';
import Button from '../../Components/login/Button';
import FirebasePlugin, { firestore } from '../../Plugins/firebase/Firebase';
import Icons from 'react-native-vector-icons/MaterialIcons'

import Constants from '../../Config/Constants';
import Utils from '../../utils/utils';
import Colors from '../../Config/Colors';

const SettingScreen = () => {
  const [packaeName, setpackaeName] = useState('');
  const [errorpackaeName, setErrorpackaeName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateCTextField = () => {
    let isValidField = Utils.isValidField(packaeName);
    isValidField ?
      setErrorpackaeName('') :
      setErrorpackaeName(Constants.STRING.ADDText);
    return isValidField;
  };

 



  const addPackagetoFirebase = () => {
    setIsLoading(true);

    const PackageRef = firestore.collection('packages').doc();
    const userID = FirebasePlugin.auth().currentUser.uid;

    PackageRef.set({
      packaeID: PackageRef.id,
      packaeName: packaeName,
      userID: userID,
    })
      .then(function () {
        setIsLoading(false);
        Alert.alert('packae creado:', PackageRef.id);
      })
      .catch(function (error) {
        Alert.alert('Error al crear', error.message);
        setIsLoading(false);
      });
  };

  return (

    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.blue} barStyle="light-content" />

      <Icons
        name='input'
        size={26}
        color={Colors.blue}
        style={styles.icono}
        onPress={()=>{firebase.auth().signOut()}}
      />
      <Icons
        name='settings'
        size={200}
        color={Colors.silver}
      />
      <Text style={styles.texto}>My first Reant Native Package</Text>
      <CTextField
        value={packaeName}
        autoCorrect={false}
        placeholder={Constants.STRING.NAMEPACK}
        error={errorpackaeName}
        onChange={(newpackaeName) => {
          setpackaeName(newpackaeName);
        }}
        onValidate={validateCTextField}
      />
      <Button
        titleButton={Constants.STRING.ADD_EMAIL_BUTTON}
        onPress={addPackagetoFirebase}
        isLoading={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingTop: '15%'
  },
  texto: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    width: '90%',
    color: Colors.blue
  },
  icono: {
    alignSelf: 'flex-end',
    paddingRight: '5%'
  }
});

export default SettingScreen;
