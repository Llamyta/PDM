import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Images from '../../Config/Images';
import Colors from '../../Config/Colors'

export default class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={Images.LOGO} style={styles.image} />
        <Text style={styles.text}>My Fist Package</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 140,
    height: 140,
  },
  text: {
    color: Colors.blue,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
    fontSize:20
  },
});
