import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './screens/LoginScreens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import React  from 'react';
import ProfileScreen from './screens/profile/ProfileScreen';
import ReportScreen from './screens/ReportScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import SignedInStack, { SignedOutStack } from './navigation';
import AuthNavigation from './authNavigation';
export default function App() {
  return<AuthNavigation/>;
}

