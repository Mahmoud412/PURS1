import { View, Text ,Image,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import ProfileScreen from '../../screens/profile/ProfileScreen'


const Header = ({navigation}) => {
  imageUrl='https://img.icons8.com/color/344/support.png'
  return (
    <View style={styles.container} >
    <TouchableOpacity>
    <Text style={styles.text}>PURS</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.push('ProfileScreen')}>
    <View style={styles.IconsContainer}>
      <Image style={styles.prfileLogo} source={{uri:'https://img.icons8.com/color/344/circled-user-female-skin-type-4--v1.png'}}/>
    </View>
    </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
    logo: {
        width: 60,
        height: 60,
        marginleft: 20,
        resizeMode: 'contain',
        
    },
    container: {
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
      marginHorizontal:20,
      marginTop:20,
    },
    IconsContainer: {
      flexDirection:'row',
    },
    separator:{
      width: "100%",
      height: 0.5,
      // marginBottom: 16.0,
      backgroundColor: "grey",
  },
  prfileLogo:{
    width: 50,
        height: 50,
        marginleft: 20,
        resizeMode: 'contain',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#D3D3D3',
        marginTop:10,
        width:40,
        height:40,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 30,
    color: '#008080',
   marginTop:10,
   arginleft: 20,
    fontFamily:'AvenirNextCondensed-BoldItalic'
},

})

export default Header