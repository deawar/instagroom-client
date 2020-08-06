import React, { useEffect, useContext, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    ScrollView,

} from 'react-native';
import Constants from 'expo-constants'
import Moment from 'moment'
import Axios from 'axios'

import TimeDatePicker from '../components/DatePicker'
import AppButton from '../components/AppButton';
import AppRadioButton from '../components/AppRadioButton';
import AppScreen from '../components/AppScreen';
import AppTextInput2 from '../components/AppTextInput2';
import colors from '../config/colors';
import AppBackButton from '../components/AppBackButton';
import AppRouteButton from '../components/AppRouteButton';
import AppTextArea from '../components/AppTextArea';
import DatePicker from '../components/DatePicker'
import AppModal from '../components/AppModal';
import { UserContext } from '../util/UserContext'




const clients = {

}



const Schedule = ({ history }) => {

    const { schedule } = useContext(UserContext);
    const [scheduleValue, setSchedule] = schedule;
    const currentDate = Moment(new Date()).tz('America/New_York').format('ll')
    const appointments = [
        {
            appointmentDate: 'Aug 5, 2020',
            appointmentTime: '7:15 pm EDT',
            customerName: 'Jacob Smith',
            customerEmail: 'jacob_smith@yahoo.com',
            notes: 'Tomtom (Dachshund) is allergic to teatree shampoo',
            totalFee: '39.00',
            petService: [
                {
                    'service': 'Haircut',
                    'fee': '22.00'
                },
                {
                    'service': 'Shampoo',
                    'fee': '10.00'
                },
                {
                    'service': 'Fluff',
                    'fee': '7.00'
                }
            ]
        },
        {
            appointmentDate: 'Aug 5, 2020',
            appointmentTime: '8:15 pm EDT',
            customerName: 'John Smith',
            customerEmail: 'jsmith@yahoo.com',
            notes: 'Clarice is allergic to wool',
            totalFee: '39.00',
            petService: [
                {
                    'service': 'Haircut',
                    'fee': '22.00'
                },
                {
                    'service': 'Shampoo',
                    'fee': '10.00'
                },
                {
                    'service': 'Fluff',
                    'fee': '7.00'
                }
            ]
        }

    ]
    const [displayAppointments, setDisplayAppointments] = useState(appointments)

    const currentAppontments = (date) => {
        date === null ? console.log(currentDate) : console.log(date)
        date === null ?
            Axios({
                method: 'get',
                url: `https://www.instagroom.me/api/findappointment/${currentDate}`
            })
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err.response))

            :
            Axios({
                method: 'get',
                url: `https://www.instagroom.me/api/findappointment/${date}`
            })
                .then(res => {
                    console.log(res.data.data)
                    setDisplayAppointments([...res.data.data])
                    console.log(displayAppointments)
                })
                .catch(err => console.log(err.response))



    }





    useEffect(() => {
        console.log('The screen has loaded')
        let currentDate = new Date();
        let todayDate = Moment(currentDate).tz('America/New_York').format('ll')
        Axios({
            method: 'get',
            url: `https://www.instagroom.me/api/findappointment/${todayDate}`
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err.response))
    }, [])





    return (

        < AppScreen >
            <ImageBackground style={styles.container} blurRadius={2} source={require('../../assets/dog_book.jpg')} >
                <View style={styles.transparent} />
                <View style={styles.items}>
                    <View style={[styles.styleHorizontal, { justifyContent: 'space-between' }]}>
                        <AppBackButton onPress={() => history.push('/userpage')} />
                        <AppRouteButton onPress={() => history.push('/route')} />
                    </View>
                    <View style={[styles.styleVertical, { alignItems: 'center' }]}>
                        <Text style={styles.textHeader}> Schedule for Andrew Murray</Text>
                        <DatePicker showTime={false} />
                        <AppButton
                            icon='calendar-clock'
                            title='Check Appointments'
                            color='black'
                            op={.75}
                            height={55}
                            onPress={() => currentAppontments(scheduleValue.dayToSet)}
                        />
                    </View>
                    <ScrollView style={styles.appointmentScroll}>
                        {
                            displayAppointments.map((el, index) => {
                                let services = el.petService.map(item => {
                                    return item.service + ' | '
                                })

                                return <AppModal
                                    key={index}
                                    buttonText={el.customerName + ' '.repeat(4) + Moment(el.appointmentDate).tz('America/New_York').format('ll') + ', ' + el.appointmentTime}
                                    modalText={el.notes}
                                    children={<Text style={{ marginBottom: 14 }}> {services}  totalFee: ${el.totalFee}</Text>}
                                />
                            })
                        }
                    </ScrollView>

                </View>

            </ImageBackground>

        </AppScreen >
    );



}



const styles = StyleSheet.create({
    appointmentScroll: {
        backgroundColor: colors.white,
    },
    container: {
        flex: 1,
    },
    items: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 2,
        borderColor: colors.dark,
        margin: 4,
        padding: 5,
    },
    transparent: {
        height: '99%',
        width: '98%',
        position: 'absolute',
        margin: 4,
        backgroundColor: colors.black,
        opacity: .6,
    },

    styleHorizontal: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    styleVertical: {
        flexDirection: 'column'
    },
    textHeader: {
        color: colors.white,
        fontSize: 18,
        alignSelf: 'center'

    }

})
export default Schedule;