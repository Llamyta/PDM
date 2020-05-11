import * as React from 'react';
import { useState, useEffect } from 'react';
import * as firebase from "firebase";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Vistas
import Logueado from '../View/register/register'

const Drawer = createStackNavigator();
function App() {
    

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Logueado" component={Logueado} />                
            </Drawer.Navigator>
        </NavigationContainer>

    );
}

export default App;