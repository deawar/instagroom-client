import React, { useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,

} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

import AppScreen from '../components/AppScreen';
import colors from '../config/colors';
import AppTextInput2 from '../components/AppTextInput2';
import AppBackButton from '../components/AppBackButton';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import AppButton from '../components/AppButton';
import { UserContext } from '../util/UserContext'


const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const expRegExp = /^\d{2}\/\d{2}/;


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
    cardName: Yup.string().required().nullable(),
    cardNumber: Yup.string().required().nullable().min(13).max(19),
    expDate: Yup.string().required().min(4).matches(expRegExp, 'Enter valid exp date'),
    chargeFees: Yup.string().required().nullable()

});



const Billing = ({ history }) => {
    const { user, schedule } = useContext(UserContext);
    const [userValue, setUser] = user;
    const processBill = (values) => {
        Axios.post('https://www.instagroom.me/api/postbilling', values, {
            headers: {
                'Authorization': 'Bearer ' + userValue.token
            }
        }).then(res => {
            console.log(res.data)
        }).catch(err => console.log(err))
    }
    return (
        <AppScreen>
            <ImageBackground
                style={styles.container}
                blurRadius={2}
                source={require('../../assets/dog_banker.jpg')}
            >
                <AppBackButton
                    onPress={() => history.push('/userpage')}
                />
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
                        cardName: null,
                        cardNumber: null,
                        cardType: null,
                        expDate: null,
                        chargeFees: null,
                        notes: null

                    }}
                    onSubmit={(values, { resetForm }) => {
                        processBill(values)
                        // resetForm({ values: '' })
                    }}
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, values }) => (
                        <ScrollView style={styles.scroll}>

                            <View style={styles.headerContainer}>
                                <MaterialCommunityIcons style={{ color: colors.white }} name='account' size={25} />
                                <Text style={styles.header}>CUSTOMER BILLING</Text>
                            </View>
                            <View style={styles.styleHorizontal} >
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
                            </View>
                            <View>
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
                            </View>
                            <View style={styles.styleHorizontal}>
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
                                    width='35%'
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
                            <View style={styles.headerContainer}>
                                <Entypo name='scissors' size={25} color={colors.white} />
                                <Text style={styles.header}>Payment Info</Text>
                            </View>
                            <View style={[styles.styleVertical, { paddingBottom: 50, marginBottom: 100 }]}>
                                <AppTextInput2
                                    placeholder='Name on Card'
                                    width='80%'
                                    name='cardName'
                                    onChangeText={handleChange('cardName')}
                                    value={values.cardName}
                                />
                                <AppTextInput2
                                    placeholder='Card Number'
                                    width='80%'
                                    name='cardNumber'
                                    onChangeText={handleChange('cardNumber')}
                                    value={values.cardNumber}
                                />
                                <AppTextInput2
                                    placeholder='Card Type'
                                    width='40%'
                                    name='cardType'
                                    onChangeText={handleChange('cardType')}
                                    value={values.cardType}
                                />
                                <AppTextInput2
                                    placeholder='exp date ddmm'
                                    width='40%'
                                    name='expDate'
                                    onChangeText={handleChange('expDate')}
                                    value={values.expDate}
                                />
                                <AppTextInput2
                                    placeholder='Fees'
                                    width='80%'
                                    name='chargeFees'
                                    onChangeText={handleChange('chargeFees')}
                                    value={values.chargeFees}
                                />
                                <AppTextInput2
                                    placeholder='Transaction Notes'
                                    width='80%'
                                    name='notes'
                                    onChangeText={handleChange('notes')}
                                    value={values.notes}
                                />
                                {Object.keys(errors).length != 0 ? <Text
                                    style={{ backgroundColor: colors.secondary, color: colors.white, fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}
                                >Fill all fields in Billing form</Text>
                                    : null
                                }

                                <AppButton
                                    icon='credit-card-outline'
                                    title='Submit Payment'
                                    height='20%'
                                    color='black'
                                    type='submit'
                                    op={.7}
                                    onPress={handleSubmit}
                                />

                            </View>
                            <View />
                        </ScrollView>
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
        padding: 10,
        flexDirection: 'column',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        marginVertical: 10,
        marginLeft: 5,

    },
    scroll: {
        padding: 5,
        borderColor: colors.white,
        borderWidth: 1,
        marginTop: 10

    },
    styleHorizontal: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    styleVertical: {
        flexDirection: 'column'
    },
    headerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: colors.white,
        borderBottomWidth: 2,

    },

})

export default Billing;