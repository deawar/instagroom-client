import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    View,

} from 'react-native';

import AppScreen from '../components/AppScreen'
import AppTextInput from '../components/AppTextInput';
import AppTextInput2 from '../components/AppTextInput2'

class UserRegister extends Component {
    state = {
        businessName: '',
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        state: '',
        postal: '',
        country: '',
        userName: '',
        passWord: ''

    }
    render() {

        return (

            < AppScreen >
                <ImageBackground style={styles.container} blurRadius={2} source={require('../../assets/grooming1.jpg')}>
                    <View style={styles.inputsHor}>
                        <AppTextInput2
                            placeholder="First Name"
                            width='40%' />
                        <AppTextInput2
                            placeholder="Last Name"
                            width='40%'
                        />
                    </View>
                    <View style={styles.inputsHor}>
                        <AppTextInput2
                            placeholder="Address"
                            width='75%' />

                    </View>
                    <View style={styles.inputsHor}>
                        <AppTextInput2
                            placeholder="City"
                            width='20%' />
                        <AppTextInput2
                            placeholder="State"
                            width='20%' />
                        <AppTextInput2
                            placeholder="Postal/Zip"
                            width='20%' />
                        <AppTextInput2
                            placeholder="Country"
                            width='20%' />
                    </View>
                    <View style={styles.inputsVert}>
                        <AppTextInput2
                            placeholder="Phone"
                            width='50%'
                        />
                        <AppTextInput2
                            placeholder="UserName"
                            width='50%' />
                        <AppTextInput2
                            placeholder="PassWord"
                            width='50%' />
                    </View>
                </ImageBackground>
            </AppScreen>

        )

    }




}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    inputsHor: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 5,
    },
    inputsVert: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: 2,

    },

})

export default UserRegister;