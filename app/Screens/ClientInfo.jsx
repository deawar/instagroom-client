import React, { Component, useState } from 'react';
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
import Axios from 'axios'

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
    country: Yup.string().required().nullable().min(3),
    petName: Yup.string().required().nullable(),
    breed: Yup.string().required().nullable(),
    gender: Yup.string().required().nullable(),
    weight: Yup.number().required().nullable(),
    age: Yup.number().required().nullable(),
    medicalCondition: Yup.string().required().nullable(),
    petDetail: Yup.array()
});



const ClientInfo = ({ history }) => {

    const [pets, setPets] = useState([])

    const addPet = (petObj) => {
        const { petName, breed, gender, weight, age, medicalCondition } = petObj;
        let pet = {
            petName,
            breed,
            gender,
            weight,
            age,
            medicalCondition
        }

        return pet
    };
    const registerClient = (values) => {

        const { firstName, lastName, street, city, state, zip, phone, email, petDetail } = values;
        petDetail.length === 0 ?
            petDetail.push({
                petName: values.petName,
                breed: values.breed,
                gender: values.gender,
                weight: values.weight,
                age: values.age,
                medicalcondition: values.medicalCondition

            }) : null

        let numberOfPets = petDetail.length
        let registerInfo = {
            firstName,
            lastName,
            street,
            city,
            state,
            zip,
            phone,
            email,
            petDetail,
            numberOfPets

        }
        Axios({
            method: 'post',
            url: 'https://www.instagroom.me/api/addcustomer',
            data: {
                ...registerInfo
            }
        })
            .then(resp => (console.log(resp.data)
            ))
            .catch(err => { console.log(err) })
    }



    return (

        <ImageBackground style={styles.container} blurRadius={4} source={require('../../assets/dog_haircut.jpg')}>
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
                    country: null,
                    breed: null,
                    petName: null,
                    gender: null,
                    weight: null,
                    age: null,
                    medicalCondition: null,
                    petDetail: [],
                }}
                onSubmit={(values, { resetForm }) => {
                    registerClient(values)
                    resetForm({ values: '' })
                }}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, values }) => (
                    <ScrollView style={styles.scroll}>

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
                                    placeholder='City'
                                    width='40%'
                                    name='city'
                                    onChangeText={handleChange('city')}
                                    value={values.city}
                                />
                                <AppTextInput2
                                    placeholder='State'
                                    width='20%'
                                    name='state'
                                    onChangeText={handleChange('state')}
                                    value={values.state}
                                />
                                <AppTextInput2
                                    placeholder='Postal/Zip'
                                    width='25%'
                                    name='zip'
                                    onChangeText={handleChange('zip')}
                                    value={values.zip}
                                />
                                <AppTextInput2
                                    placeholder='Country'
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
                                onChangeText={handleChange('breed')}
                                value={values.breed}
                            />
                            <AppTextInput2
                                spellcheck={false}
                                placeholder='Dogs Name'
                                width='80%'
                                name='petName'
                                onChangeText={handleChange('petName')}
                                value={values.petName}
                            />
                            <AppTextInput2
                                placeholder='Pet Gender'
                                width='80%'
                                name='gender'
                                onChangeText={handleChange('gender')}
                                value={values.gender}
                            />
                            <View style={styles.inputContainerH}>
                                <AppTextInput2
                                    placeholder='Weight'
                                    width='45%'
                                    name='weight'
                                    onChangeText={handleChange('weight')}
                                    value={values.weight}
                                />
                                <AppTextInput2
                                    placeholder='Age/Birthday'
                                    width='45%'
                                    name='age'
                                    onChangeText={handleChange('age')}
                                    value={values.age}
                                />
                            </View >
                            <View style={[styles.inputContainerV, { height: 120 }]}>
                                <AppTextInput2
                                    placeholder='medicalCondition Issues/Medication'
                                    width='95%'
                                    name='medicalCondition'
                                    onChangeText={handleChange('medicalCondition')}
                                    value={values.medicalCondition}
                                />
                                {pets.length > 0 ?
                                    <View style={styles.seePets}>
                                        <Text style={[styles.header, { textDecorationLine: 'underline' }]}>Pets Added So far</Text>
                                        {pets.map((el, index) => {
                                            return <Text style={styles.pets} key={index} >{el.petName}    {el.breed}</Text>
                                        })
                                        }
                                    </View> :
                                    null}
                                <AppButton
                                    icon='plus-circle'
                                    color='black'
                                    op={.7}
                                    height='45%'
                                    title='Add Pet'
                                    onPress={() => (
                                        pets.findIndex(el => {
                                            return el.petName === values.petName
                                        }) === -1 ?
                                            values.petDetail.push(addPet(values)) : null
                                        ,
                                        setPets([...values.petDetail])
                                    )}
                                />
                                <AppButton
                                    icon='plus-circle-outline'
                                    color='black'
                                    op={.7}
                                    height='45%'
                                    title='Add All Info'
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>
                        <View style={{ height: 200 }} />
                    </ScrollView>

                )
                }
            </Formik>

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
    },
    pets: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.primary
    },
    scroll: {
        height: 1200,
        marginVertical: 20
    },
    seePets: {
        backgroundColor: colors.white,
        width: 350,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    }
})

export default ClientInfo;