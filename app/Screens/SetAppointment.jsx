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
    email: Yup.string().required().nullable().label('Email'),
    clientName: Yup.string().required().nullable().label('Client Name')
});




const SetAppointment = ({ history }) => {
    const { user, schedule } = useContext(UserContext);
    const [userValue, setUser] = user;
    const [scheduleValue, setSchedule] = schedule;


    const checkAndCreateAppointment = (values) => {
        console.log(values)


    }






    return (

        <AppScreen>
            <ImageBackground style={styles.container} blurRadius={10} source={require('../../assets/dog_schedule.jpg')} >
                {/* <ScrollView> */}
                <View style={{ flex: 1, alignContent: 'center' }}>
                    <Formik
                        initialValues={{
                            clientName: 'Andrew Murray',
                            email: 'atmurray@bellsur.net',
                            services: ['haircut $22.00', 'shampoo $10.00 ', 'fluff $7.00'],
                            fee: '$39.00',
                            date: 'October 21st 2020',
                            time: '7:15 pm EDT',
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
                                    <TimeDatePicker onChange={console.log(scheduleValue.timeToSet + ' ' + scheduleValue.dayToSet)} />
                                </View>
                                <View style={{ flex: 1, alignContent: 'flex-start' }}>
                                    <Text style={styles.header} >Services Detail</Text>
                                    <AppTextInput2
                                        placeholder='Client Name'
                                        width='90%'
                                        name='clientName'
                                        onChangeText={handleChange('clientName')}
                                        value={values.clientName}
                                    />
                                    <AppTextInput2
                                        placeholder='Client email'
                                        width='90%'
                                        name='email'
                                        onChangeText={handleChange('email')}
                                        value={values.email}
                                    />
                                    <DropDown
                                        height={75}
                                        title='Services'
                                    />
                                    {/* <AppTextArea
                                        placeholder='Comments/Notes/Medical'
                                        name='notes'
                                        onChange={handleChange('notes')}
                                        value={values.notes}
                                    /> */}
                                </View>

                                <AppButton
                                    icon='dog'
                                    title='Confirm'
                                    color='primary'
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