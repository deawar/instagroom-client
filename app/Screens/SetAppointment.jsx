import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    ScrollView
} from 'react-native';
import Constants from 'expo-constants'

import TimeDatePicker from '../components/DatePicker'
import AppButton from '../components/AppButton';
import AppRadioButton from '../components/AppRadioButton';
import AppScreen from '../components/AppScreen';
import AppTextInput2 from '../components/AppTextInput2';
import colors from '../config/colors';
import AppBackButton from '../components/AppBackButton';
import AppTextArea from '../components/AppTextArea'


const SetAppointment = ({ history }) => {

    const [appointment, setAppointment] = useState({
        date: null,
        time: null,
        clientName: '',
        notes: '',
        travelTime: 0
    })
    return (

        <AppScreen>
            <ImageBackground style={styles.container} blurRadius={10} source={require('../../assets/dog_schedule.jpg')} >
                <ScrollView>
                    <View style={{ alignContent: 'center', paddingHorizontal: '10%' }}>

                        <AppBackButton onPress={() => history.push('/userpage')} />
                        <Text style={styles.header}>Set Next Appointment</Text>
                        <View style={styles.picker}>
                            <TimeDatePicker
                                onChange={event => console.log(event.nativeEvent)}
                            />
                        </View>
                        <View style={{ alignContent: 'flex-start' }}>
                            <Text style={styles.header} >Services Detail</Text>
                            <AppTextInput2
                                placeholder='Client Name'
                                width='90%'
                            />
                            <AppTextArea
                                placeholder='Services'
                            />
                            <AppTextArea
                                placeholder='Comments/Notes/Medical'
                            />
                        </View>
                        <View style={{ alignContent: 'flex-start', justifyContent: 'center' }}>

                            <Text style={styles.header}>Send ETA to next Appointment</Text>
                            <AppRadioButton
                                style={styles.button}
                                textcolor='white'
                                text='Add 30 minutes to travel time'
                            />
                            <AppRadioButton
                                style={styles.button}
                                textcolor='white'
                                text='Use ETA given by Google Maps'
                            />
                        </View>
                        <AppButton
                            icon='dog'
                            title='submit'
                            color='medium'
                            op={.75}
                            onPress={console.log('submitted')}
                            height={'12%'}
                        />
                    </View>
                </ScrollView>
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
    },

})
export default SetAppointment;