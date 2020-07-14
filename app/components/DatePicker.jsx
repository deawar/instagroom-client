import React, { useState } from 'react';
import {
    View,
    Button,
    Platform,
    StyleSheet
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import colors from '../config/colors'
import AppButton from '../components/AppButton'


const TimeDatePicker = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        console.log(date)
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
            <View style={styles.button}>
                <Button onPress={showTimepicker} title="APPOINTMENT TIME" />
            </View>
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