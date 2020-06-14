import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//vistas
import LoginScreen from '../View/login/LoginScreen';
import RegisterScreen from '../View/register/Register';
import Colors from '../Config/Colors';
import OnBoard from '../View/OnBoarding/OnBoarding'
const Stack = createStackNavigator();

function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="OnBoard"
                    component={OnBoard}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{
                        title: 'Register Form',
                        headerStyle: {
                            backgroundColor: Colors.blue,
                        },
                        headerTintColor: Colors.white,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: Colors.white,
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer >

    );
}

export default App;