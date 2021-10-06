import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Chatscreen from '../screens/Chatscreen'
import CameraScreen from '../screens/CameraScreen'
import StoriesScreen from '../screens/StoriesScreen'
import {Ionicons} from '@expo/vector-icons'




const Tab = createBottomTabNavigator()

export const BottomNav = () => {


    const Icons = {
        Chat: "ios-chatbox-outline",
        Camera: "camera-outline",
        Users: "people",
    }


    return (
        <Tab.Navigator screenOptions={({route}) => {
            return {
                tabBarIcon: ({size, color}) => {
                        const iconName = Icons[route.key]
                        return <Ionicons name={iconName} size={size} color={color}/>
                }
            }
        }}>
            <Tab.Screen name="Chat" component={Chatscreen} />
            <Tab.Screen name="Camera" component={CameraScreen} />
            <Tab.Screen name="Users" component={StoriesScreen} />
        </Tab.Navigator>
    )
}