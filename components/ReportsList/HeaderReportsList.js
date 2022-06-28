import { View, Text, SafeAreaView, TouchableOpacity ,StyleSheet} from 'react-native'
import React from 'react'
import { Icon, Button } from '@rneui/base'
import HomeScreen from '../../screens/HomeScreen'

const HeaderReportsList = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
        
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <Icon name="arrow-back" size={24} containerStyle={{ position: 'absolute' , marginHorizontal:20 , marginTop:10}} />
            </TouchableOpacity>
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})
export default HeaderReportsList