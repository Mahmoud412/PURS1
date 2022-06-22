import { View, Text ,TouchableOpacity, Image,StyleSheet} from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
const ReportHeader = ({navigation}) => {
  return (
      
    <View style={{marginBottom:15}}>
    <TouchableOpacity onPress={()=>navigation.goBack('HomeScreen')}>
      <Image style={styles.logo} source={{uri:'https://img.icons8.com/external-phatplus-lineal-phatplus/344/external-back-arrow-essential-phatplus-lineal-phatplus.png'}}/>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        margin:12
        
    },
})
export default ReportHeader