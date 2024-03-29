import React, { useState, useEffect, useContext } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Alert
} from 'react-native';
import * as Yup from 'yup'
import { Formik } from 'formik'
import Moment from 'moment-timezone'
import Axios from 'axios'



import TimeDatePicker from '../components/DatePicker'
import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import AppTextInput2 from '../components/AppTextInput2';
import colors from '../config/colors';
import AppBackButton from '../components/AppBackButton';
import { UserContext } from '../util/UserContext'
import DropDown from '../components/DropDown';


const validationSchema = Yup.object().shape({
    customerEmail: Yup.string().required().email().label('Email'),
    customerName: Yup.string().required().nullable().label('Client Name')
});




const SetAppointment = ({ history }) => {
    const { user, schedule } = useContext(UserContext);
    const [scheduleValue, setSchedule] = schedule;
    const [userValue, setUserValue] = user;

    const checkAndCreateAppointment = (values) => {
        let fee = 0
        values.petService.map(el => {
            fee += parseFloat(el.fee)
        })
        values.totalFee = fee.toString()
        values.appointmentDate = scheduleValue.dayToSet
        values.appointmentTime = scheduleValue.timeToSet
        Axios.post('https://www.instagroom.me/api/addAppointment', values, {
            headers: {
                'Authorization': 'Bearer ' + userValue.token
            }

        }).then(res => {
            console.log(res.data.data)
        }).catch(err => console.log(err))
    }
    let currentDate = new Date();
    return (

        <AppScreen>
            <ImageBackground style={styles.container} blurRadius={5} source={require('../../assets/dog_schedule.jpg')} >
                <View style={{ flex: 1, alignContent: 'center' }}>
                    <Formik
                        initialValues={{
                            customerName: '',
                            customerEmail: '',
                            petService: [],
                            totalFee: '0',
                            appointmentDate: Moment(currentDate).tz('America/New_York').format('MMMM Do YYYY'),
                            appointmentTime: Moment(currentDate).tz('America/New_York').format('h:mm a z'),
                            notes: ''
                        }}
                        onSubmit={(values, { resetForm }) => {
                            checkAndCreateAppointment(values)
                            resetForm({ values: '' })
                            Alert.alert('appointment set')
                        }
                        }
                        validationSchema={validationSchema}
                    >
                        {({ handleChange, handleSubmit, errors, values }) => (
                            <>
                                <AppBackButton onPress={() => history.push('/userpage')} />
                                <Text style={styles.header}>Set Next Appointment</Text>
                                <View style={styles.picker}>
                                    <TimeDatePicker />
                                </View>
                                <View style={{
                                    marginVertical: 10,
                                    alignSelf: 'center',
                                    backgroundColor: colors.dark,
                                    opacity: .75


                                }}>
                                    <Text style={styles.header}>Current Appointment Time to Set</Text>
                                    <Text style={styles.header}>{scheduleValue.dayToSet}    {scheduleValue.timeToSet}</Text>
                                </View>

                                <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
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
                                    <AppTextInput2
                                        placeholder='Notes'
                                        width='90%'
                                        name='notes'
                                        onChangeText={handleChange('notes')}
                                        value={values.notes}
                                    />
                                    <DropDown
                                        height={65}
                                        title='Services'
                                        pressAddButton={(item) => {
                                            (values.petService.find(el => {
                                                return el.service === item.service
                                            }) ?
                                                console.log('service already exists') :
                                                values.petService.push(item)
                                            )
                                        }}
                                        pressRemButton={(item) => {
                                            (
                                                values.petService = values.petService.filter((el => {
                                                    return el.service !== item.service
                                                }))
                                            )
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
                                    height={'10%'}
                                />
                            </>
                        )}
                    </Formik>

                </View>
            </ImageBackground>

        </AppScreen>
    );



}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 10,
        paddingHorizontal: 5,

    },
    errors: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.secondary
    },
    header: {
        fontSize: 16,
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
    serviceList: {
        fontSize: 18,
        color: colors.white,
        alignSelf: 'center'
    }
})
export default SetAppointment;