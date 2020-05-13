import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TextInput } from 'react-native';
//Color
import Colors from '../config/colors';
import Constants from '../config/constants';
//Vistas
import Logo from '../components/CVLogo';
import CVCiudad from '../components/CVCiudad';
import ButtonLogin from '../components/button';



class CVScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            confCB: 0,
            soCB: 0,
            confSC: 0,
            soSC: 0,
            confOR: 0,
            soOR: 0,
            search: '',
        };

        this._onChangeTextConfCB = this._onChangeTextConfCB.bind(this);
        this._onChangeTextSoCB = this._onChangeTextSoCB.bind(this);
        this._onChangeTextConfSC = this._onChangeTextConfSC.bind(this);
        this._onChangeTextSoSC = this._onChangeTextSoSC.bind(this);
        this._onChangeTextConfOR = this._onChangeTextConfOR.bind(this);
        this._onChangeTextSoOR = this._onChangeTextSoOR.bind(this);

        this._onChangeTextInputSearch=this._onChangeTextInputSearch.bind(this);
        this._onPress = this._onPress.bind(this);
    }

    _onChangeTextConfCB(confCB) {
        this.setState({
            confCB: confCB,
        });
    }
    _onChangeTextSoCB(soCB) {
        this.setState({
            soCB: soCB,
        });
    }
    _onChangeTextConfSC(confSC) {
        this.setState({
            confSC: confSC,
        });
    }
    _onChangeTextSoSC(soSC) {
        this.setState({
            soSC: soSC,
        });
    }
    _onChangeTextConfOR(confOR) {
        this.setState({
            confOR: confOR,
        });
    }
    _onChangeTextSoOR(soOR) {
        this.setState({
            soOR: soOR,
        });
    }
    _onChangeTextInputSearch(search) {
        this.setState({
            search: search,
        });
    }
    _onPress() {
        console.log('Presionado');
        let n1CB,n2SC,n3OR, busqueda;
        if(this.state.search=='CONFIRMADOS')
        {
            n1CB=parseInt(this.state.confCB);
            n2SC=parseInt(this.state.confSC);
            n3OR=parseInt(this.state.confOR);
        }
        if(this.state.search=='SOSPECHOSOS')
        {
            n1CB=parseInt(this.state.soCB);
            n2SC=parseInt(this.state.soSC);
            n3OR=parseInt(this.state.soOR);
        }

        let mayor =Math.max(n1CB,n2SC,n3OR);
        console.log("El indice mas alto de casos "+ this.state.search +" es: "+mayor);
    }


    render() {
        return (
            <>
                <View style={styles.contenedor} >
                    <Logo />
                    <View style={styles.espacio}>
                        <CVCiudad
                            ciudad={Constants.CB}
                            onChangeTextConf={this._onChangeTextConfCB}
                            onChangeTextSo={this._onChangeTextSoCB}
                            secureTextEntry={false}
                            autoCorrect={false}
                        />
                        <CVCiudad
                            ciudad={Constants.SC}
                            onChangeTextConf={this._onChangeTextConfSC}
                            onChangeTextSo={this._onChangeTextSoSC}
                            secureTextEntry={false}
                            autoCorrect={false}
                        />
                        <CVCiudad
                            ciudad={Constants.OR}
                            onChangeTextConf={this._onChangeTextConfOR}
                            onChangeTextSo={this._onChangeTextSoOR}
                            secureTextEntry={false}
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.espacio}>
                        <TextInput

                            style={styles.input}
                            onChangeText={this._onChangeTextInputSearch}
                            selectionColor={Colors.blue}
                            placeholder={Constants.BUSQUEDA}
                            secureTextEntry={false}
                            autoCorrect={false}
                            placeholderTextColor={Colors.plomo3}
                            underlineColorAndroid="transparent"
                        >
                        </TextInput>
                    </View>
                    <ButtonLogin
                        onPress={this._onPress}
                        titleButton={Constants.TITLE_BUTTON}
                    />
                </View>

            </>
        );
    }
}
const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: Colors.green,
        alignItems: 'center',
        height: '100%'
    },
    text: {
        color: Colors.black,
        textAlign: 'center',
        height: 20,
        fontWeight: 'bold'
    },
    input: {
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        height: 40,
        width: 200,
        borderRadius: 10,
        borderColor: Colors.silver,

    },
    espacio: {
        marginBottom: 30
    },
    boton: {
        marginTop: 20
    }

});
export default CVScreen;