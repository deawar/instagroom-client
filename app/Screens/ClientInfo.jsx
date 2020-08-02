import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
} from 'react-native';
import Constants from 'expo-constants'
import { Formik } from 'formik';
import * as Yup from 'yup'

import AppTextInput2 from '../components/AppTextInput2';
import AppButton from '../components/AppButton';
import AppBackButton from '../components/AppBackButton';
import colors from '../config/colors';


const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    firstName: Yup.string().required().nullable(),
    lastName: Yup.string().required().nullable(),
    street: Yup.string().required().nullable(),
    city: Yup.string().required().nullable(),
    state: Yup.string().required().nullable().min(2).max(2),
    zip: Yup.string().required().nullable().min(5),
    phone: Yup.string().required().nullable().matches(phoneRegExp, 'Enter valid phone number'),
    country: Yup.string().required().nullable().min(3)
});



const ClientInfo = ({ history }) => {

    return (

        <ImageBackground style={styles.container} blurRadius={4} source={require('../../assets/dog_haircut.jpg')}>
            <ScrollView>
                <AppBackButton onPress={() => history.push('/userpage')} />
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
                        country: null,
                        breed: null,
                        dogName: null,
                        coatLength: null,
                        weight: null,
                        age: null,
                        medical: null
                    }}
                    onSubmit={values => registerUser(values)}
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, values }) => (
                        <>
                            <Text style={styles.header}>Customer Address/Phone/Email</Text>
                            <View style={styles.inputContainerH}>
                                <AppTextInput2
                                    placeholder='First Name'
                                    width='45%'
                                    name='firstName'
                                    onChangeText={handleChange('firstName')}
                                    value={values.firstName}

                                />
                                <AppTextInput2
                                    placeholder='Last Name'
                                    width='45%'
                                    name='lastName'
                                    onChangeText={handleChange('lastName')}
                                    value={values.lastName}
                                />
                            </View >
                            {errors.firstName && <Text style={styles.errorMessage}>All text fields are required</Text>}

                            <View style={styles.inputContainerV}>
                                <AppTextInput2
                                    placeholder='Phone'
                                    width='60%'
                                    name='phone'
                                    onChangeText={handleChange('phone')}
                                    value={values.phone}
                                />
                                <AppTextInput2
                                    placeholder='Email'
                                    width='60%'
                                    name='email'
                                    onChangeText={handleChange('email')}
                                    value={values.email}
                                />
                                <AppTextInput2
                                    placeholder='Street'
                                    width='80%'
                                    name='street'
                                    onChangeText={handleChange('street')}
                                    value={values.street}
                                />
                                <View style={[styles.inputContainerH, { flexWrap: 'wrap' }]}>
                                    <AppTextInput2
                                        placeholder="City"
                                        width='40%'
                                        name='city'
                                        onChangeText={handleChange('city')}
                                        value={values.city}
                                    />
                                    <AppTextInput2
                                        placeholder="State"
                                        width='20%'
                                        name='state'
                                        onChangeText={handleChange('state')}
                                        value={values.state}
                                    />
                                    <AppTextInput2
                                        placeholder="Postal/Zip"
                                        width='25%'
                                        name='zip'
                                        onChangeText={handleChange('zip')}
                                        value={values.zip}
                                    />
                                    <AppTextInput2
                                        placeholder="Country"
                                        width='40%'
                                        name='country'
                                        onChangeText={handleChange('country')}
                                        value={values.country}
                                    />
                                </View>
                            </View>
                            <View style={[styles.inputContainerV, { marginTop: 45, paddingTop: 15 }]}>
                                <Text style={styles.header}>Pet Information</Text>
                                <AppTextInput2
                                    placeholder='Enter Dog Breed'
                                    width='80%'
                                    name='breed'
                                    onChange={handleChange('breed')}
                                    value={values.breed}
                                />
                                <AppTextInput2
                                    placeholder='Dogs Name'
                                    width='80%'
                                    name='dogName'
                                    onChange={handleChange('dogName')}
                                    value={values.dogName}
                                />
                                <AppTextInput2
                                    placeholder='Coat Long/Short'
                                    width='80%'
                                    name='coatLength'
                                    onChange={handleChange('coatLength')}
                                    value={values.coatLength}
                                />
                                <View style={styles.inputContainerH}>
                                    <AppTextInput2
                                        placeholder='Weight'
                                        width='45%'
                                        name='weight'
                                        onChange={handleChange('weight')}
                                        value={values.weight}
                                    />
                                    <AppTextInput2
                                        placeholder='Age/Birthday'
                                        width='45%'
                                        name='age'
                                        onChange={handleChange('age')}
                                        value={values.age}
                                    />
                                </View >
                                <View style={[styles.inputContainerV, { height: 120 }]}>
                                    <AppTextInput2
                                        placeholder='Medical Issues/Medication'
                                        width='95%'
                                        name='medical'
                                        onChange={handleChange('medical')}
                                        value={values.medical}
                                    />
                                    <AppButton
                                        icon='plus-circle'
                                        color='black'
                                        op={.7}
                                        height='45%'
                                        title='Add Pet'
                                    />
                                    <AppButton
                                        icon='plus-circle-outline'
                                        title='Add All Info'
                                        height='45%'
                                        color='black'
                                        op={.7}
                                        onPress={() => console.log(values)}
                                    />
                                </View>
                            </View>
                            <Text>{JSON.stringify(errors)}</Text>
                        </>

                    )
                    }
                </Formik>

            </ScrollView>
        </ImageBackground>





    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        minHeight: '100%',
        paddingTop: Constants.statusBarHeight + 10,
    },
    errorMessage: {
        fontSize: 16,
        color: colors.secondary,
        alignSelf: 'center',
        fontWeight: 'bold'

    },
    header: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputContainerH: {
        flexDirection: 'row',
        height: '5%',
        marginBottom: 5,
    },
    inputContainerV: {
        flexDirection: 'column',
        width: '100%',
        marginTop: 25,
        padding: 0,
    }
})

export default ClientInfo;