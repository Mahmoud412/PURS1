import { View, Text ,SafeAreaView} from 'react-native'
import React from 'react'
import ReportsList from '../../components/ReportsList/ReportsList'
import HeaderReportsList from '../../components/ReportsList/HeaderReportsList'

const ReportsListScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <HeaderReportsList navigation={navigation}/>
      <ReportsList  navigation={navigation}/>
    </SafeAreaView>
  )
}

export default ReportsListScreen