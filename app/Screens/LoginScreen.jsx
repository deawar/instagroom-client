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
import AppTextInput from '../components/AppTextInput'


const LoginScreen = ({ history }) => {
    return (
        <AppScreen>
            <ImageBackground style={styles.container} source={require('../../assets/dogBath.jpg')}>
                <View style={styles.logo} >
                    <LogoIcon size={100} />
                </View>
                <AppTextInput icon='email' />
                <AppTextInput icon='lock' />
                <AppButton style={styles.button} title="Login" color='black' op={.5} onPress={() => history.push('/register')} />
                <AppButton style={styles.button} title="Register" color='black' op={.5} onPress={() => history.push('/register')} />
                <AppButton icon='apple' style={styles.button} title='Login with Apple' color='black' op={.5} />
                <AppButton icon='google' style={styles.button} title='Login with Google' color='black' op={.5} />



            </ImageBackground>
        </AppScreen>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    logo: {
        position: 'absolute',
        top: 10,

    },
    button: {

        bottom: 20,

    }
});

export default LoginScreen;