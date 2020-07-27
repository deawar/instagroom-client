import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet,
    ImageBackground,
    View,
    Text,
    TextInput,

} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import AppTextInput2 from '../components/AppTextInput2';
import AppButton from '../components/AppButton';
import AppBackButton from '../components/AppBackButton';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    passWord: Yup.string().required().min(8).label('Password'),
    passWord: Yup.string().required().min(8).label('Password2'),
    firstName: Yup.string().required().nullable(),
    lastName: Yup.string().required().nullable(),
    street: Yup.string().required().nullable(),
    city: Yup.string().required().nullable(),
    state: Yup.string().required().nullable().min(2).max(2),
    zip: Yup.string().required().nullable().min(5),
    phone: Yup.string().required().nullable().min(10),
    country: Yup.string().required().nullable().min(4)
})



const UserRegister = ({ history, ...props }) => {

    // const [firstName, setfirstName] = useState();
    // const [lastName, setLastName] = useState();
    // const [street, setStreet] = useState();
    // const [city, setCity] = useState();
    // const [state, setState] = useState();
    // const [zip, setZip] = useState();
    // const [phone, setPhone] = useState();
    // const [email, setEmail] = useState();
    // const [UserName, setUserName] = useState();
    // const [passWord, setPassWord] = useState();
    // const [passWord2, setPassWord2] = useState();
    // const [country, setCountry] = useState();
    // const userDataObj = {
    //     firstName,
    //     lastName,
    //     street,
    //     city,
    //     state,
    //     zip,
    //     phone,
    //     email,
    //     passWord,
    //     country
    // };


    return (
        < AppScreen >
            <ImageBackground style={styles.container} blurRadius={2} source={require('../../assets/grooming1.jpg')}>
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
                        passWord: null,
                        passWord2: null,
                        country: null
                    }}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors }) => (
                        <>
                            <View style={styles.inputsHor}>
                                <AppTextInput2
                                    name='firstName'
                                    placeholder="First Name"
                                    width='40%'
                                    onChangeText={handleChange('firstName')}
                                />
                                <AppTextInput2
                                    name='lastName'
                                    placeholder="Last Name"
                                    width='40%'
                                    onChangeText={handleChange('lastName')}
                                />
                            </View>
                            {errors.firstName && <Text style={styles.errors}>{errors.firstName}</Text>}
                            {errors.lastName && <Text style={styles.errors}>{errors.lastName}</Text>}

                            <View style={styles.inputsHor}>
                                <AppTextInput2
                                    placeholder="Street"
                                    onChangeText={handleChange('street')}
                                    width='75%'
                                />

                            </View>
                            <View style={styles.inputsHor}>
                                <AppTextInput2
                                    placeholder="City"
                                    onChangeText={handleChange('city')}
                                    width='20%'
                                />
                                <AppTextInput2
                                    placeholder="State"
                                    onChangeText={handleChange('state')}
                                    width='20%'
                                />
                                <AppTextInput2
                                    placeholder="Postal/Zip"
                                    onChangeText={handleChange('zip')}
                                    width='20%'
                                />
                                <AppTextInput2
                                    placeholder="Country"
                                    width='20%'
                                    onChangeText={handleChange('country')}
                                />

                            </View>
                            <View style={styles.inputsVert}>
                                <AppTextInput2
                                    placeholder="Phone"
                                    width='50%'
                                    onChangeText={handleChange('phone')}

                                />
                                <AppTextInput2
                                    placeholder="Email"
                                    width='50%'
                                    textContentType='emailAddress'
                                    onChangeText={handleChange('email')}
                                />
                                {errors.email && <Text style={styles.errors}>Valid Email Required</Text>}
                                <AppTextInput2
                                    placeholder="PassWord"
                                    width='50%'
                                    onChangeText={handleChange('password')}
                                />
                                <AppTextInput2
                                    placeholder="PassWord2"
                                    width='50%'
                                    onChangeText={handleChange('passWord2')}
                                />
                            </View>
                            <AppButton
                                icon='account-box'
                                title='submit'
                                color='dark'
                                op={.75}
                                onPress={handleSubmit}
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
        fontWeight: 'bold'
    }

})
export default UserRegister;
