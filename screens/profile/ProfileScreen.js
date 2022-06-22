import { View, Text ,SafeAreaView} from 'react-native'
import React from 'react'
import Profile from '../../components/Profile'
const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Profile navigation={navigation}/>
    </SafeAreaView>
  )
}

export default ProfileScreen