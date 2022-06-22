import { View, Text , SafeAreaView,StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import Cards from '../components/Home/Cards'
import ButtomTabs, { bottomTabIcons } from '../components/Home/ButtomTabs'
const HomeScreen = ({navigation}) => {
  return(

      <SafeAreaView style={styles.container}>
          <Header navigation={navigation}/>
            <Cards navigation = {navigation}/>
           <ButtomTabs navigation={navigation} icons={bottomTabIcons}/>
      </SafeAreaView>
      
  )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    }
})
export default HomeScreen