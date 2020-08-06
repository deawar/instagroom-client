import React, { useContext, useState } from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Text,
    ToastAndroid,
    Platform,
    AlertIOS,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup'
import Axios from 'axios';

import AppScreen from '../components/AppScreen'
import LogoIcon from '../components/LogoIcon';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput'
import AppModal from '../components/AppModal'
import { UserContext } from '../util/UserContext'



const validationSchema = Yup.object().shape({
    email: Yup.string().required().nullable().label('Email'),
    password: Yup.string().required().nullable().label('Password')
});


const LoginScreen = ({ history }) => {
    const { user } = useContext(UserContext);

    const [userValue, setUser] = user;



    const submitLogin = (loginData) => {
        Axios({
            method: 'post',
            url: 'https://www.instagroom.me/api/signin',
            data: {
                ...loginData
            }
        })
            .then(res => {
                setUser({ ...userValue, token: res.data.data.token })
                !res.data.error ? history.push('/userpage') : null
            })
            .catch(err => (
                (
                    console.log(err.response.data.message),
                    err.response.data.message.trim() === 'Invalid email/password or User not verified'
                        ? history.push('/register') : null
                )


            )
            )

    }

    return (
        <AppScreen>
            <ImageBackground style={styles.container} source={require('../../assets/dogBath.jpg')}>
                <View style={styles.logo} >
                    <LogoIcon size={100} />
                </View>
                <Formik
                    initialValues={{
                        email: null,
                        password: null,
                    }}
                    onSubmit={(values, { resetForm }) => {
                        submitLogin(values)
                        // resetForm({ values: '' })
                    }

                    }
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, values }) => (
                        <>
                            {errors.email && <Text>{values.email}</Text>}
                            <AppTextInput
                                id='email'
                                name='email'
                                icon='email'
                                onChangeText={handleChange('email')}
                                value={values.email}
                            />
                            <AppTextInput
                                id='password'
                                name='password'
                                icon='lock'
                                secureTextEntry={true}
                                onChangeText={handleChange('password')}
                                value={values.passWord}
                            />


                            <AppButton
                                name='submit'
                                style={styles.button}
                                title="Login" color='black'
                                op={.5}
                                onPress={handleSubmit}
                            />
                            <AppButton
                                style={styles.button}
                                title="Register"
                                color='black' op={.5}
                                onPress={() => history.push('/register')}
                            />
                            <AppButton
                                icon='google'
                                style={styles.button}
                                title='Login with Google'
                                color='black'
                                op={.5}
                                onPress={() => history.push('./verify')}
                            />
                        </>
                    )
                    }
                </Formik>
            </ImageBackground>
        </AppScreen >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    logo: {
        position: 'absolute',
        top: 10,

    },
    button: {

        bottom: 20,

    }
});

export default LoginScreen;