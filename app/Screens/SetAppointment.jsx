import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground
} from 'react-native';
import Constants from 'expo-constants'

import TimeDatePicker from '../components/DatePicker'
import AppButton from '../components/AppButton';
import AppRadioButton from '../components/AppRadioButton';
import AppScreen from '../components/AppScreen';
import AppTextInput2 from '../components/AppTextInput2';
import colors from '../config/colors';
import AppBackButton from '../components/AppBackButton';


const SetAppointment = ({ history }) => {
    return (

        <AppScreen>
            <ImageBackground style={styles.container} blurRadius={10} source={require('../../assets/dog_schedule.jpg')} >
                <AppBackButton onPress={() => history.push('/userpage')} />
                <Text style={styles.header}>Next Appointment</Text>
                <AppTextInput2 placeholder='Services Dropdown' width='85%' />
                <Text style={styles.header} >Services Detail</Text>
                <AppTextInput2 placeholder='Client Name' width='90%' />
                <AppTextInput2 placeholder='Comments/Notes' width='90%' />

                <Text style={styles.header}>Send ETA to next Appointment</Text>
                <AppRadioButton style={styles.button} textcolor='white' text='Add 30 minutes to travel time' />
                <AppRadioButton style={styles.button} textcolor='white' text='Used proposed ETA given by Google Maps' />
                <Text style={styles.header}>Radio Button Group Label</Text>
                <AppRadioButton style={styles.button} textcolor='white' text='Send Receipt by SMS' />
                <AppRadioButton style={styles.button} textcolor='white' text='Send Receipt Via Email' />

                <View style={styles.picker}>
                    <TimeDatePicker />
                </View>


            </ImageBackground>

        </AppScreen>
    );



}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
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
    }
})
export default SetAppointment;