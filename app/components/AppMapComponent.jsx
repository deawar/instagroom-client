import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import AppScreen from '../components/AppScreen';
import colors from '../config/colors'


const AppMapComponent = () => {
    return (
        <Text>I am a map component</Text>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        borderRadius: 7,
        width: Dimensions.get('window').width - 20,

    },
    map: {
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height - 10,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',


    },
    styleHorizontal: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    styleVertical: {
        flexDirection: 'column'
    },
    headerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: colors.white,
        borderBottomWidth: 2,

    },

})


export default AppMapComponent;