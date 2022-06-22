import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import ReportUploder from '../components/ReportUploder'
import ReportHeader from '../components/ReportHeader'
const ReportScreen = ({navigation}) => {
   return (

      <SafeAreaView style={styles.container}>
         <ReportHeader navigation={navigation} />
         <ReportUploder navigation={navigation} />
      </SafeAreaView>
   )
}


const styles = StyleSheet.create({
   container: {

      backgroundColor: '#fff',
      flex: 1,

   }
})

export default ReportScreen