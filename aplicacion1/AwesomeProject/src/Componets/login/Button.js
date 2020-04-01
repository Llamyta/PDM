import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TouchableOpacity,Text} from 'react-native';
import Colors from '../../Config/colors';


class button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={stylesButton.container} onPress={this.props.onPress}>
          <Text style={stylesButton.text}>{this.props.titleButton}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
/*const styles = StyleSheet.create({
        container: { 
            flex: 1, top: -95, 
            alignItems: 'center', 
            justifyContent: 'flex-start', 
        }, 
        button: { 
            alignItems: 'center', 
            justifyContent: 'center',
            padding:15, 
            backgroundColor: '#f1414e', 
            width:'auto', 
            height: Constants.DEFAULT_MARGIN_BUTTON, 
            borderRadius: 15, 
            zIndex: 100, 
        }, 
        /*circle: { 
            height: Constants.DEFAULT_MARGIN_BUTTON, 
            width: Constants.DEFAULT_MARGIN_BUTTON, 
            marginTop: -Constants.DEFAULT_MARGIN_BUTTON, 
            borderWidth: 1, 
            borderColor: '#F035E0', 
            alignSelf: 'center', 
            zIndex: 99, 
            backgroundColor: '#F035E0', 
        }, 
        text: { 
            color: 'white', 
            backgroundColor: 'transparent', 
        }, 
        image: { 
            width: 24, 
            height: 24, 
        },
        body: { 
            flex: 1, 
            flexDirection: 'column', 
            backgroundColor: '#1292B4', 
        }
     });*/
     const stylesButton = StyleSheet.create({
      container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.rosado,
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(255,255,255,0.7)',
      },
      text: {color: Colors.white, textAlign: 'center', height: 20, fontWeight:'bold'},
    });
    
    button.propTypes = {};
    
    export default button;