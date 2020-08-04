import React, { useState, useEffect, useContext } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    ScrollView
} from 'react-native';
import * as Yup from 'yup'
import { Formik } from 'formik'
import Moment from 'moment-timezone'



import TimeDatePicker from '../components/DatePicker'
import AppButton from '../components/AppButton';
import AppRadioButton from '../components/AppRadioButton';
import AppScreen from '../components/AppScreen';
import AppTextInput2 from '../components/AppTextInput2';
import colors from '../config/colors';
import AppBackButton from '../components/AppBackButton';
import AppTextArea from '../components/AppTextArea'
import { UserContext } from '../util/UserContext'
import DropDown from '../components/DropDown';


const validationSchema = Yup.object().shape({
    customerEmail: Yup.string().required().email().label('Email'),
    customerName: Yup.string().required().nullable().label('Client Name')
});




const SetAppointment = ({ history }) => {
    const { user, schedule } = useContext(UserContext);
    const [userValue, setUser] = user;
    const [scheduleValue, setSchedule] = schedule;


    const checkAndCreateAppointment = (values) => {
        console.log(values)

    }
    let currentDate = new Date();

    const addService = (service) => {

    }

    return (

        <AppScreen>
            <ImageBackground style={styles.container} blurRadius={5} source={require('../../assets/dog_schedule.jpg')} >
                {/* <ScrollView> */}
                <View style={{ flex: 1, alignContent: 'center' }}>
                    <Formik
                        initialValues={{
                            customerName: 'Andrew Murray',
                            customerEmail: 'atmurray@bellsur.net',
                            petServices: [],
                            fee: '$39.00',
                            appointmentDate: Moment(currentDate).tz('America/New_York').format('MMMM Do YYYY'),
                            appointmentTime: Moment(currentDate).tz('America/New_York').format('h:mm a z'),
                            notes: 'Pepper (Dalmation) is allergic to teatree shampoo'
                        }}
                        onSubmit={values => checkAndCreateAppointment(values)}
                        validationSchema={validationSchema}
                    >
                        {({ handleChange, handleSubmit, errors, values }) => (
                            <>
                                <AppBackButton onPress={() => history.push('/userpage')} />
                                <Text style={styles.header}>Set Next Appointment</Text>
                                <View style={styles.picker}>
                                    <TimeDatePicker />
                                </View>
                                <View style={{ marginVertical: 10 }}>
                                    <Text style={styles.header}>Current Appointment Time to Set</Text>
                                    <Text style={styles.header}>{scheduleValue.dayToSet}    {scheduleValue.timeToSet}</Text>
                                </View>

                                <View style={{ flex: 1, alignContent: 'flex-start' }}>
                                    <Text style={styles.header} >Services Detail</Text>
                                    <AppTextInput2
                                        placeholder='Client Name'
                                        width='90%'
                                        name='customerName'
                                        onChangeText={handleChange('customerName')}
                                        value={values.customerName}
                                    />
                                    <AppTextInput2
                                        placeholder='Client Email'
                                        width='90%'
                                        name='customerEmail'
                                        onChangeText={handleChange('customerEmail')}
                                        value={values.customerEmail}
                                    />
                                    {errors.customerEmail && <Text style={styles.errors}>Enter Valid Email</Text>}
                                    <DropDown
                                        height={75}
                                        title='Services'
                                        pressAddButton={(item) => {
                                            (
                                                values.petServices.push(item),
                                                console.log(values.petServices)
                                            )
                                        }}
                                        pressRemButton={(item) => {
                                            values.petServices = values.petServices.filter((el => {
                                                return el.service !== item.service
                                            }))
                                        }}
                                    />

                                </View>

                                <AppButton
                                    icon='dog'
                                    title='Confirm'
                                    color='dark'
                                    type='submit'
                                    op={.75}
                                    onPress={handleSubmit}
                                    height={'8%'}
                                />
                            </>
                        )}
                    </Formik>

                </View>
            </ImageBackground>

        </AppScreen >
    );



}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 15,
        paddingTop: 10,

    },
    errors: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.secondary
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
    },
    button: {
        marginVertical: 10,
    },
    picker: {
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

})
export default SetAppointment;