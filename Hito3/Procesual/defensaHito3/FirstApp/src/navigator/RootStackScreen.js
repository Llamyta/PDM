import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen1 from '../View/login/PDM';
import SplashScreen2 from '../View/login/DefensaHito3';
import SplashScreen3 from '../View/login/FirebaseIntegration';
import Login from '../View/login/login';
import Logueado from '../View/register/register';
import colors from '../config/colors';


const Stack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name="SplashScreen1" component={SplashScreen1} options={{headerShown: false}} />
            <Stack.Screen name="SplashScreen2" component={SplashScreen2} options={{headerShown: false}} />
            <Stack.Screen name="SplashScreen3" component={SplashScreen3}options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: colors.blue,
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
              color: colors.white,
            },
          }}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default RootStackScreen;