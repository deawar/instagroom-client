import React, { useState, useContext } from 'react';
import {
    View,
    Button,
    Platform,
    StyleSheet
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment-timezone'

import colors from '../config/colors'
import AppButton from '../components/AppButton'
import { UserContext } from '../util/UserContext';


const TimeDatePicker = ({ showTime }) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    // const [showTime, setShowTime] = useState(showTime)

    const { schedule } = useContext(UserContext);
    const [scheduleValue, setSchedule] = schedule;


    const onChange = async (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        let day = Moment(currentDate).tz('America/New_York').format('ll')
        let time = Moment(currentDate).tz('America/New_York').format('h:mm a z')
        console.log(day)
        console.log(time)

        setSchedule({
            ...scheduleValue,
            timeToSet: time,
            dayToSet: day
        })


    };

    const showMode = currentMode => {
        setShow(!show);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={styles.container}>
            <View style={styles.button} >
                <Button style={{ fontWeight: 'bold' }} onPress={showDatepicker} title="APPOINTMENT DATE" />
            </View>
            {showTime &&
                <View style={styles.button}>
                    <Button onPress={showTimepicker} title={'Time'} />
                </View>
            }
            {show && (
                <DateTimePicker
                    style={styles.picker}
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        justifyContent: 'center',
        alignContent: 'center'
    },
    button: {
        marginVertical: 5,
        borderColor: colors.white,
        backgroundColor: colors.medium,
        borderWidth: 3,
        borderRadius: 10,
        color: colors.black,
    },
    picker: {
        opacity: .45,
        backgroundColor: colors.white,
    }
})

export default TimeDatePicker