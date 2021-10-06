import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomNav } from './app/navigations/BottomNav';

import CameraScreen from './app/screens/CameraScreen'
import Login from './components/Login';
import Register from './components/Register';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Connection" component={Login}/>
        <Stack.Screen name="Inscription" component={Register}/>
        <Stack.Screen name="Camera" component={CameraScreen}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}

{/* <BottomNav /> 
<StatusBar barStyle="dark-content"/> */}



