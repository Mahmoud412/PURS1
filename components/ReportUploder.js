import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import HomeScreen from '../screens/HomeScreen';
import {firebase ,db} from './firebase'
const ReportValidationSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumber: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required').matches(/^[0-9]*$/, 'Only Numbers are allowed'),
  address: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  problem_Description: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),

});

const ReportUploder = ({navigation}) => {
  const user = firebase.auth().currentUser
  const onReport = async (firstName ,lastName ,email, phoneNumber , address ,problem_Description ) =>{
     useEffect(()=>{
       db.collection('Reports').add({
         userId: user.uid,
         firstName:firstName,
         lastName:lastName,
         email:email,
         phoneNumber:phoneNumber,
         address:address,
         problem_Description: problem_Description,
       })
     })
  }
  return (
    
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', phoneNumber: '', address: '', problem_Description: '' }}
      onSubmit={(values)=>{
        onReport(values.firstName , values.lastName , values.email , values.phoneNumber, values.address , values.problem_Description)
      }}
      validationSchema={ReportValidationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
        <View style={{ flex: 1 }}>
          <TextInput style={styles.input}
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur(' firstName')}
            value={values.firstName}
            placeholder="First Name"
          />
          {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
          <TextInput style={styles.input}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            value={values.lastName}
            placeholder="Last Name"
          />
          {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
          <TextInput style={styles.input}
            onChangeText={handleChange('phoneNumber')}
            onBlur={handleBlur('phoneNumber')}
            keyboardType='numeric'
            value={values.phoneNumber}
            placeholder="Phone Number"
          />
          {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}
          <TextInput style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder='Email'
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          <TextInput style={styles.input}
            onChangeText={handleChange('address')}
            onBlur={handleBlur('address')}
            value={values.address}
            placeholder="address"
          />
          {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}
          <TextInput style={styles.input}
            onChangeText={handleChange('problem_Description')}
            onBlur={handleBlur('problem_Description')}
            value={values.problem_Description}
            placeholder="Problem Description"
          />
          {errors.problem_Description && <Text style={styles.errorText}>{errors.problem_Description}</Text>}

          <Button  onPress={()=>{handleSubmit(), navigation.navigate('HomeScreen')}}  title="Submit" disabled={!isValid} />
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginLeft: 20,
  },
})

export default ReportUploder