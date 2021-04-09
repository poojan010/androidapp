import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import MainScreen from '../screens/Main';
import SettingsScreen from '../screens/Settings';
import colors from '../constants/colors';

const Stack = createStackNavigator();

const stackNavigatorOptions = { 
    headerShown : null,
    
    // for animation in stack screens
    ...TransitionPresets.SlideFromRightIOS ,
          
}

const settingsScreenOptions = {
    headerShown : true,
    headerTitleStyle : {
        marginLeft : 65,
        color : colors.black
    },
    headerTintColor : colors.primary
}

const AppNavigator = () => {
    return(
        <NavigationContainer>

            <Stack.Navigator screenOptions={stackNavigatorOptions}>

                <Stack.Screen name="Main" component={MainScreen} />

                <Stack.Screen name="Settings" options={settingsScreenOptions} component={SettingsScreen} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default AppNavigator