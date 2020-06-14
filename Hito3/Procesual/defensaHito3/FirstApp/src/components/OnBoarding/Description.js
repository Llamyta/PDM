import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image
} from 'react-native';
import Colors from '../../config/colors'

function Description({ img, text, text1, container }) {
    return (
        <View style={container}>
           <View style={styles.header}>
                <Image
                    source={img}
                    style={styles.image}
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>{text}</Text>
                <Text style={styles.text}>{text1}</Text>
            </View> 
        </View>
    );
};


const styles = StyleSheet.create({
    
    head:{},
    foot:{},
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
        marginTop: 5,
        width:'60%'
    },
});
export default Description;