import React, { useEffect, useContext, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Button,
    Alert,

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

    const { schedule, client, user } = useContext(UserContext);
    const [scheduleValue, setSchedule] = schedule;
    const [userValue, setUser] = user;
    const [clientValue, setClient] = client;
    const date = new Date();
    const currentDate = Moment(date).tz('America/New_York').format('ll');

    const [displayAppointments, setDisplayAppointments] = useState([]);

    const currentAppontments = (date) => {
        date === null ? console.log(currentDate) : console.log(date)
        date === null ?
            Axios({
                method: 'get',
                url: `https://www.instagroom.me/api/findappointment/${currentDate}`
            })
                .then(res => {
                })
                .catch(err => console.log(err.response))
            :
            Axios({
                method: 'get',
                url: `https://www.instagroom.me/api/findappointment/${date}`
            })
                .then(res => {
                    setDisplayAppointments([...res.data.data])
                })
                .catch(err => console.log(err.response))
    }





    useEffect(() => {
        let currentDate = new Date().toISOString();
        let todayDate = Moment(currentDate).tz('America/New_York').format('ll')
        setSchedule({ ...scheduleValue, dayToSet: todayDate })
        Axios({
            method: 'get',
            url: `https://www.instagroom.me/api/findappointment/${todayDate}`
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err.response))
    }, [])

    const getCustomerAddress = (customerEmail) => {

        Axios.get(`https://www.instagroom.me/api/customerEmail/${customerEmail}`, {
            headers: {
                'Authorization': 'Bearer ' + userValue.token
            }
        }).then(async res => {
            const { firstName, lastName, street, city, state, zip } = res.data.data;
            setClient({
                customerName: `${firstName} ${lastName}`,
                customerAddress: `${street},${city}, ${state} ${zip}`
            })

        }).catch(err => console.log(err))





    }




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
                        <Text style={{ color: colors.white, fontSize: 16, alignSelf: 'center' }}>
                            DATE: {scheduleValue.dayToSet}</Text>
                        <AppButton
                            icon='calendar-clock'
                            title='Check Appointments'
                            color='black'
                            op={.75}
                            height={55}
                            onPress={() => currentAppontments(scheduleValue.dayToSet)}
                        />
                    </View>
                    <ScrollView
                        style={styles.appointmentScroll}
                        fadingEdgeLength={50}
                    >



                        {
                            displayAppointments.map((el, index) => {
                                let services = el.petService.map(item => {
                                    return item.service + ' | '
                                })
                                return <AppModal
                                    key={index}
                                    buttonText={el.customerName + ' '.repeat(4) + el.appointmentTime}
                                    modalText={el.notes}
                                    children={<Text style={{ marginBottom: 14 }}> {services}  totalFee: ${el.totalFee}</Text>}
                                    buttonChild={
                                        <Button
                                            onPress={() => (Alert.alert('Customer address set.'),
                                                getCustomerAddress(el.customerEmail)
                                            )
                                            }
                                            title="Set Address"
                                            colors={colors.primary}
                                        />}
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
        width: '90%',
        backgroundColor: colors.white,
        opacity: .7,
        borderRadius: 50,
        alignSelf: 'center'

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