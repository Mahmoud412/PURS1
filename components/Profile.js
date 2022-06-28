import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon, Button } from '@rneui/base'
import { firebase, db } from './firebase'
import ReportsListScreen from '../screens/ReportsListScreen/ReportsListScreen';



const handleSignout = async () => {
    try {

        await firebase.auth().signOut()
        console.log('Signed out successfully!')

    } catch (erorr) {
        console.log(erorr)
    }
}



const Profile = ({ navigation }) => {
    const user = firebase.auth().currentUser;
    if(user !==null){
        const email = user.email
        const userName = user.username
    }
    return (
        <View>
            <View style={{ padding: 16 }}>

                <TouchableOpacity onPress={() => navigation.goBack('HomeScreen')}>
                    <Icon name="arrow-back" size={24} containerStyle={{ position: 'absolute' }} />
                </TouchableOpacity>
                <Text style={styles.title}>Profile</Text>
            </View>

            <Image style={styles.profile} source={{ uri: 'https://photo-cdn2.icons8.com/8A-k2Q0nwB6iwqiawJtXPh-SGC2fdnUUytgTOniWAKc/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNTQyLzA2MTg1/YTMyLTI5OGItNGI0/Ny05NGQ1LWVhMTMy/YTNiNGE0NC5qcGc.jpg' }} />
            <Text style={styles.profileName}>{user.email}</Text>
            <Text style={styles.userName}>{user.userName}</Text>
            <Button
                title='Settings'
                containerStyle={{ width: '80%', alignSelf: 'center', marginTop: 100 }}
                icon={{
                    name: 'settings',
                    type: 'material',
                    size: 15,
                    color: 'white',
                }}
            />
            <Button onPress={()=>navigation.navigate('ReportsListScreen')}
                title='Reports History'

                containerStyle={{ width: '80%', alignSelf: 'center', marginTop: 30 }}
                icon={{
                    name: 'history',
                    type: 'material',
                    size: 15,
                    color: 'white',
                }}
            />

            <Button onPress={handleSignout}
                title='Log out'

                containerStyle={{ width: '80%', alignSelf: 'center', marginTop: 30 }}
                icon={{
                    name: 'logout',
                    type: 'material',
                    size: 15,
                    color: 'white',
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    profile: {
        width: 150,
        height: 150,
        marginTop: 30,
        borderWidth: 5,
        borderRadius: 100,
        alignSelf: 'center',
        resizeMode: 'cover',
        borderColor: '#EBEBEB',

    },
    title: {
        fontSize: 20,
        textAlign: 'center',
    },
    profileName: {
        fontSize: 25,
        marginTop: 16,
        textAlign: 'center',
        fontWeight: 'bold',

    },
    userName: {
        fontSize: 14,
        fontWeight: 'regular',
        textAlign: 'center',
        marginTop: 4,
    }
})

export default Profile