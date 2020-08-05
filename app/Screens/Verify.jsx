import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
} from 'react-native';

import Axios from 'axios';
import AppScreen from '../components/AppScreen';
import colors from '../config/colors'
import AppTextArea from '../components/AppTextArea';
import { MaterialCommunityIcons } from '@expo/vector-icons';




const userVerify = (token) => {
    console.log(`Here is the login data:${JSON.stringify(token)}`)
    Axios({
        method: 'get',
        url: 'https://www.instagroom.me/api/verify',
        headers: {
            Authorization: token
        }

    })
        .then(res => {
            console.log(res)
            // return res.data.error
        })
}

const Verify = () => {

    const [token, setToken] = useState('')

    return (
        <AppScreen>
            <ImageBackground style={styles.background} source={require('../../assets/dog_bouncer.jpg')} >
                <View style={styles.transparent} />
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons style={styles.icon} name='lock' size={35} color={colors.white} />
                        <MaterialCommunityIcons style={styles.icon} name='dog' size={35} color={colors.white} />
                        <MaterialCommunityIcons style={styles.icon} name='lock' size={35} color={colors.white} />
                    </View>

                    <Text style={styles.header}>Enter Your token to verify user</Text>
                    <AppTextArea />
                    <AppButton />
                </View>
            </ImageBackground>

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.dark,
        height: '30%',
        width: '85%',
        alignSelf: 'center',
        borderRadius: 10,
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 70,

    },
    background: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    iconContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: "center",
        alignContent: 'center'
    },
    transparent: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        opacity: .3,
        backgroundColor: colors.dark,

    }
})
export default Verify;