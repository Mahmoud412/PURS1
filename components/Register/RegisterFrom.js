import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Icon, Button } from '@rneui/base'
import LoginScreen from '../../screens/LoginScreen/LoginScreen'
import { firebase, db } from '../firebase'
const RegisterFromValidationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required').matches(/^[0-9]*$/, 'Only Numbers are allowed'),
    password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
})

const onSignup = async (email, password, username,phone_number) => {
    try {
      const authuser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(
        "firebase User Created Successfully",
        email,
        password,
        username,
        phone_number
      );

      db.collection("users")
        .doc(authuser.user.email)
        .set({
          owner_uid: authuser.user.uid,
          username: username,
          email: authuser.user.email,
          phonenumber:phone_number,
          
        });
    } catch (error) {
      Alert.alert("My Lord...", error.message);
    }
  };

const RegisterFrom = ({ navigation }) => {
    return (
        <Formik
            initialValues={{ name: '', email: '', phoneNumber: '', password: '', }}
            onSubmit={(values) => {
                onSignup(values.email, values.password, values.name, values.phoneNumber)
            }}
            validationSchema={RegisterFromValidationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                <View>
                    <View>
                        <Text style={styles.text}>
                            PURS
                        </Text>
                    </View>
                    <TextInput style={styles.input}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        placeholder="Name"
                    />
                    {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
                    <TextInput style={styles.input}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder="Email"
                        textContentType='emailAddress'
                    />
                    {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                    <TextInput style={styles.input}
                        onChangeText={handleChange('phoneNumber')}
                        onBlur={handleBlur('phoneNumber')}
                        value={values.phoneNumber}
                        placeholder="Phone Number"
                        keyboardType='numeric'
                        textContentType='telephoneNumber'
                    />
                    {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}
                    <TextInput style={styles.input}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder="password"
                        secureTextEntry={true}
                        textContentType='password'
                        autoCapitalize='none'
                        autoCorrect={false}

                    />
                    {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                    <Button onPress={handleSubmit} title="Sgin Up"
                        containerStyle={{ width: '80%', alignSelf: 'center', marginTop: 30 }}
                        icon={{
                            name: 'login',
                            type: 'material-community',
                            color: '#fff',
                            size: 20,
                        }} />

                    <View style={styles.signupContainer}>
                        <Text> Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.push('LoginScreen')}>
                            <Text style={{ color: "#add8e6" }}> log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        margin: 15,
        borderWidth: 1,
        padding: 10,
        borderRadius: 25,
    },
    errorText: {
        fontSize: 12,
        color: 'red',
        marginLeft: 20,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 30,
        color: '#008080'
    },
    signupContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 50,
    },
})


export default RegisterFrom