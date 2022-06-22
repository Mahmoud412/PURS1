import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import RegisterFrom from '../../components/Register/RegisterFrom'




const RegisterScreen = ({navigation}) => {
  return (
    <SafeAreaView>
     <RegisterFrom navigation={navigation}/>
    </SafeAreaView>
  )
}

export default RegisterScreen