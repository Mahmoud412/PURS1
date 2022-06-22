import { View, Text,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import { ListItem , Avatar} from "@rneui/themed";
import ReportScreen from '../../screens/ReportScreen';

const list =[
    {
        name:'Water',
        avatar_url:'https://img.icons8.com/color/344/water.png',
        subtitle:'Report water problem'
    },
    {
        name:'Asphalt',
        avatar_url:'https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-asphalt-construction-flaticons-flat-flat-icons.png',
        subtitle:'Report asphalt problem'
    },
    {
        name:'Telephone',
        avatar_url:'https://img.icons8.com/clouds/344/phone-office.png',
        subtitle:'Report telephone problem',
    },
    {
        name:'Gas',
        avatar_url:'https://img.icons8.com/color/344/gas-station.png',
        subtitle:'Report gas problem'
    },
    {
        name:'Electricity',
        avatar_url:'https://img.icons8.com/color/344/electricity.png',
        subtitle:'Report electricity problem'
    },
    {
        name:'Internet',
        avatar_url:'https://img.icons8.com/color/344/internet.png',
        subtitle:'Report internet problem'
    },
    


]
const Cards = ({navigation}) => {
  return (
      
      <View style={styles.container}>
      {
    list.map((l, i) => (
        <TouchableOpacity onPress={()=>navigation.push('ReportScreen')}>
        <ListItem style={styles.ronded} key={i} bottomDivider>
          <Avatar style={styles.avatarRonded} source={{uri: l.avatar_url}} />
          <ListItem.Content style={styles.ronded_content}>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        </TouchableOpacity>
      ))
      }
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop:20,
       
    },
    ronded: {
        borderRadius:25,
        borderWidth:4,
        borderColor:'#D3D3D3',
        marginBottom:20,
    },
    avatarRonded:{
        borderRadius:20,
        borderWidth:2,
        borderColor:'#D3D3D3',
        marginBottom:20,
        width:40,
        height:40,
    },
    ronded_content:{
        borderRadius:25,
    }
    
})

export default Cards