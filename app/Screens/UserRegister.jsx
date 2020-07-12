import React from 'react';
import {
    StyleSheet,
    ImageBackground,
    View,

} from 'react-native';

import AppScreen from '../components/AppScreen'
import AppTextInput from '../components/AppTextInput';

const UserRegister = () => {
    return (
        <AppScreen>
            <ImageBackground style={styles.container} blurRadius={2} source={require('../../assets/grooming1.jpg')}>
                <View style={styles.form}>
                    <AppTextInput />
                    <AppTextInput />
                    <AppTextInput />
                </View>
            </ImageBackground>
        </AppScreen>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },

})

export default UserRegister;