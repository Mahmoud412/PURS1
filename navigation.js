import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation,NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/profile/ProfileScreen'
import ReportScreen from './screens/ReportScreen'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import RegisterScreen from './screens/LoginScreens/RegisterScreen'
import ReportsListScreen from './screens/ReportsListScreen/ReportsListScreen'
const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false,
};

 export const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen"
            screenOptions={screenOptions}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="ReportScreen" component={ReportScreen} />
            <Stack.Screen name="ReportsListScreen" component={ReportsListScreen} />

            

        </Stack.Navigator>
    </NavigationContainer>
);


export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen"
            screenOptions={screenOptions}
        >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

        </Stack.Navigator>
    </NavigationContainer>
)

