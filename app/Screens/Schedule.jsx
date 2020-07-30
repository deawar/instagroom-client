import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    ScrollView,
} from 'react-native';
import Constants from 'expo-constants'
import Moment from 'moment'

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



const clients = {

}

const currentTime = (time) => {


}

const Schedule = ({ history }) => {
    return (

        <AppScreen>
            <ImageBackground style={styles.container} blurRadius={2} source={require('../../assets/dog_book.jpg')} >
                <View style={styles.transparent} />
                <ScrollView style={styles.scroll}>
                    <View style={[styles.styleHorizontal, { justifyContent: 'space-between' }]}>
                        <AppBackButton onPress={() => history.push('/userpage')} />
                        <AppRouteButton onPress={() => history.push('/route')} />
                    </View>
                    <View style={[styles.styleVertical, { alignItems: 'center' }]}>
                        <Text style={styles.textHeader}> Schedule for Andrew Murray</Text>
                        <DatePicker />
                    </View>

                </ScrollView>

            </ImageBackground>

        </AppScreen>
    );



}



const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    scroll: {
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