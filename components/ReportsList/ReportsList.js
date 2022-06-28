import { View, Text, SafeAreaView,ActivityIndicator,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { firebase, db } from '../firebase'
import { ListItem } from '@rneui/base'
import { FlatList} from 'react-native-gesture-handler'



const ReportsList = () => {
    const [loading, setLoading] = useState(true)
    const [reports, setReports] = useState([])

    useEffect(() => {
        const subcriber = db.collection('users').doc(firebase.auth().currentUser.email).collection('reports').onSnapshot((querySnapshot) => {
            const reports = []
            querySnapshot.forEach(documentSnapshot => {
                reports.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                })
            })
            setReports(reports)
            setLoading(false)
        })
        return () => subcriber()
    }, [])
    if (loading) {
        return <ActivityIndicator />
    }
    return (
        <SafeAreaView style={styles.container}>

            <View>
            <Text style={styles.text}>List Of Recent Reports.</Text>
            </View>
        
            <FlatList data={reports} renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style={styles.flatText}>problem description: {item.problem_description}</Text>
                  <Text style={styles.flatText}>Address: {item.address}</Text>

                </View>
            )} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
       marginHorizontal:5,
       marginVertical:50

        
    },
    item:{
        backgroundColor: '#D3D3D3',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor:'#ff8501',
    },
    flatText: {
        fontSize: 20,
        fontFamily:'Baskerville-Bold'
      },
      text: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily:'Baskerville-Bold'
    },
    separator: {
        width: "100%",
        height: 0.5,
        backgroundColor: "grey",
    }
})

export default ReportsList