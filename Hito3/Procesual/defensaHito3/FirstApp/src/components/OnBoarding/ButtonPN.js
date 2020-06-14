import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './Button';


function buttonPN({ onPress, onPress2, styleButton,titleButtonPrev,titleButtonNext }) {
  return (
    <View style={styles.button}>

      <Button
        titleButton={titleButtonPrev}
        onPress={onPress}
        styleButton={styleButton}
      />
      <Button
        titleButton={titleButtonNext}
        onPress={onPress2}
        styleButton={styleButton}
      />

    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },

});

export default buttonPN;
