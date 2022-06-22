import { View, Text,TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import Divider from 'react-native-divider'




export const bottomTabIcons =[
  {
    name:'home',
    icon:'https://img.icons8.com/ios/344/home--v1.png',
  },

  {
    name:'track',
    icon: 'https://img.icons8.com/external-icongeek26-outline-icongeek26/344/external-track-logistics-delivery-icongeek26-outline-icongeek26.png'
  },
    {
        name:'profile',
        icon:'https://img.icons8.com/color/344/circled-user-female-skin-type-4--v1.png',
       
    },
   
   
]


const ButtomTabs = ({icons}) => {
  const [active, setActive] = useState('home')


  const Icon=({icon})=>(
    <TouchableOpacity onPress={()=>setActive(icon.name)}>
      <Image source={{uri:icon.icon}} style={styles.icon}/>
    </TouchableOpacity>
  )
    return(
      <View style={styles.wrapper}>
      <View style={styles.separator}/>
     <View style={styles.container}>
      {icons.map((icon,index)=>(
        <Icon key={index} icon={icon}/>
      ))}
     </View>
     </View>
    )
}
    
const styles = StyleSheet.create({
icon:{
    width:40,
    height:40,
},
wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "3%",
    zIndex: 999,
    backgroundColor: "#fff",
  },
  separator: {
    width: "100%",
    height: 0.5,
    // marginBottom: 16.0,
    backgroundColor: "grey",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
})

export default ButtomTabs