import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,

} from 'react-native';

import colors from '../config/colors'

import AppScreen from '../components/AppScreen'
import LogoIcon from '../components/LogoIcon';
import AppButton from '../components/AppButton';


const LoginScreen = () => {
    return (
        <AppScreen>
            <ImageBackground style={styles.container} source={require('../../assets/dogBath.jpg')}>
                <View style={styles.logo} >
                    <LogoIcon size={100} />
                </View>

                <AppButton title="Login" color='primary' op={1} />
            </ImageBackground>
        </AppScreen>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        marginVertical: 20,
    }
});

export default LoginScreen;