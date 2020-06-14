import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as firebase from 'firebase'
//vistas
import AppScreen from '../View/App/AppScreen';
import Colors from '../Config/Colors';
const Drawer = createDrawerNavigator();

function App() {
   
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name='App'
                    component={AppScreen}
                    options={{
                        title: 'App Main',
                        headerStyle: {
                            backgroundColor: Colors.appPrimary,
                        },
                        headerTintColor: Colors.white,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: Colors.white,
                            fontSize: 25
                        },
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>

    );
}

export default App;