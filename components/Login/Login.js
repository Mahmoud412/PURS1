import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Icon, Button } from '@rneui/base'
import RegisterScreen from '../../screens/LoginScreens/RegisterScreen'
import {firebase} from '../firebase'
const LoginValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
})


const onLogin = async (email, password) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log("firebase login Successfully", email, password);
    } catch (erorr) {
        Alert.alert(erorr.message)
    }
}

const Login = ({ navigation }) => {
    return (
        <Formik
            initialValues={{ name: '', password: '', }}
            onSubmit={(values) => { onLogin(values.email, values.password) }}
            validationSchema={LoginValidationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                <View style={{ margin: 20 }}>
                    <View>
                        <Text style={styles.text}>
                            PRUS
                        </Text>
                    </View>
                    <TextInput style={styles.input}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder="Email"
                        textContentType='emailAddress'
                    />
                    {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

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

                    <Button onPress={handleSubmit} title="Log in"
                        containerStyle={{ width: '80%', alignSelf: 'center', marginTop: 30 }}
                        icon={{
                            name: 'login',
                            type: 'material-community',
                            color: '#fff',
                            size: 20,
                        }} />

                    <View style={styles.signupContainer}>
                        <Text> Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                            <Text style={{ color: "#add8e6" }}> Sign Up</Text>
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

export default Login