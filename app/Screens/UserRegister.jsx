import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet,
    ImageBackground,
    View,
    Text,
    ScrollView,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios'

import AppModal from '../components/AppModal'
import AppScreen from '../components/AppScreen';
import AppTextInput2 from '../components/AppTextInput2';
import AppButton from '../components/AppButton';
import AppBackButton from '../components/AppBackButton';
import colors from '../config/colors';


const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
const passWordRegExp = /^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?][0-9a-zA-Z]*$/

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().matches(passWordRegExp, 'Password not valid').label('Password'),
    firstName: Yup.string().required().nullable(),
    lastName: Yup.string().required().nullable(),
    street: Yup.string().required().nullable(),
    city: Yup.string().required().nullable(),
    state: Yup.string().required().nullable().min(2).max(2),
    zip: Yup.string().required().nullable().min(5),
    phone: Yup.string().required().nullable().matches(phoneRegExp, 'Enter valid phone number'),
    country: Yup.string().required().nullable().min(3)
});







const UserRegister = ({ history, ...props }) => {


    const registerUser = (registerData) => {
        console.log(`Here is the login data:${JSON.stringify(registerData)}`)
        Axios({
            method: 'post',
            url: 'https://www.instagroom.me/api/signup',
            data: {
                ...registerData
            }
        })
            .then(res => {
                console.log(`Here is the response data:   ${res.data.error}`)
                history.push('/')

            })
            .catch(err => console.log(err))
    }




    return (
        < AppScreen >
            <ImageBackground style={styles.container} blurRadius={2} source={require('../../assets/grooming1.jpg')}>
                <ScrollView style={{ flex: 1 }}>

                    <AppBackButton onPress={() => history.push('/')} />

                    <Formik
                        initialValues={{
                            firstName: null,
                            lastName: null,
                            street: null,
                            city: null,
                            state: null,
                            zip: null,
                            phone: null,
                            email: null,
                            password: null,
                            country: null
                        }}
                        onSubmit={values => registerUser(values)}
                        validationSchema={validationSchema}
                    >
                        {({ handleChange, handleSubmit, errors, values }) => (
                            <>
                                <View style={styles.inputsHor}>
                                    <AppTextInput2
                                        name='firstName'
                                        placeholder='First Name'
                                        width='40%'
                                        onChangeText={handleChange('firstName')}
                                        value={values.firstName}

                                    />
                                    <AppTextInput2
                                        name='lastName'
                                        placeholder='Last Name'
                                        width='40%'
                                        onChangeText={handleChange('lastName')}
                                        value={values.lastName}
                                    />
                                </View>
                                {errors.firstName && <Text style={styles.errors}>Enter first name</Text>}
                                {errors.lastName && <Text style={styles.errors}>enter last name</Text>}

                                <View style={styles.inputsHor}>
                                    <AppTextInput2
                                        placeholder='Street'
                                        onChangeText={handleChange('street')}
                                        width='75%'
                                    />
                                </View>

                                <View style={[styles.inputsHor, { flexWrap: 'wrap' }]}>
                                    <AppTextInput2
                                        placeholder='City'
                                        onChangeText={handleChange('city')}
                                        width='75%'
                                    />
                                    <AppTextInput2
                                        placeholder='State'
                                        maxLength={2}
                                        onChangeText={handleChange('state')}
                                        width='20%'
                                    />
                                    <AppTextInput2
                                        placeholder='Postal/Zip'
                                        onChangeText={handleChange('zip')}
                                        width='30%'
                                    />
                                    <AppTextInput2
                                        placeholder='Country'
                                        width='40%'
                                        onChangeText={handleChange('country')}
                                    />
                                    {errors.country || errors.zip || errors.state || errors.city || errors.street ? <Text style={styles.errors}>All Address fields are required</Text> : null}

                                </View>
                                <View style={styles.inputsVert}>
                                    <AppTextInput2
                                        placeholder='Phone'
                                        width='50%'
                                        onChangeText={handleChange('phone')}
                                    />
                                    {errors.phone && <Text style={styles.errors}>enter valid phone number</Text>}
                                    <AppTextInput2
                                        placeholder='Email'
                                        width='75%'
                                        textContentType='emailAddress'
                                        onChangeText={handleChange('email')}
                                    />
                                    {errors.email && <Text style={styles.errors}>Enter valid email</Text>}
                                    <AppTextInput2
                                        placeholder='Password'
                                        width='75%'
                                        secureTextEntry={true}
                                        onChangeText={handleChange('password')}
                                    />
                                    {errors.password && <Text style={styles.errors}>Valid password Required</Text>}
                                </View>
                                <AppButton
                                    icon='account-box'
                                    title='submit'
                                    color='dark'
                                    op={.75}
                                    onPress={handleSubmit}
                                    height={'15%'}
                                />
                            </>
                        )
                        }
                    </Formik>
                </ScrollView>
            </ImageBackground>
        </AppScreen >



    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    inputsHor: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 5,
    },
    inputsVert: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: 2,

    },
    errors: {
        color: colors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: '3%',
    }

})
export default UserRegister;
