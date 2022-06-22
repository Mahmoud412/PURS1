import { View, Text,  SafeAreaView} from 'react-native'
import React from 'react'
import Login from '../../components/Login/Login'

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Login navigation={navigation}/>
    </SafeAreaView>
  )
}

export default LoginScreen