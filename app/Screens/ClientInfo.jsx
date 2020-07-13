import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,

} from 'react-native';
import Constants from 'expo-constants'

import AppTextInput2 from '../components/AppTextInput2';

class ClientInfo extends Component {
    state = {}


    render() {
        return (

            <ImageBackground style={styles.container} blurRadius={4} source={require('../../assets/dog_haircut.jpg')}>
                <Text style={styles.header}>Customer Address/Phone/Email</Text>
                <View style={styles.inputContainerH}>
                    <AppTextInput2 placeholder='First Name' width='45%' />
                    <AppTextInput2 placeholder='Last Name' width='45%' />
                </View >
                <View style={styles.inputContainerV}>
                    <AppTextInput2 placeholder='Phone' width='60%' />
                    <AppTextInput2 placeholder='Email' width='60%' />
                    <AppTextInput2 placeholder='Street' width='80%' />
                    <View style={[styles.inputContainerH, { flexWrap: 'wrap' }]}>
                        <AppTextInput2
                            placeholder="City"
                            width='40%' />
                        <AppTextInput2
                            placeholder="State"
                            width='20%' />
                        <AppTextInput2
                            placeholder="Postal/Zip"
                            width='25%' />
                        <AppTextInput2
                            placeholder="Country"
                            width='20%' />
                    </View>
                </View>
                <View style={[styles.inputContainerV, { marginTop: 50 }]}>
                    <Text style={styles.header}>Pet Information</Text>
                    <AppTextInput2 placeholder='Enter Dog Breed' width='80%' />
                    <AppTextInput2 placeholder='Dogs Name' width='80%' />
                    <AppTextInput2 placeholder='Coat Long/Short' width='80%' />
                    <View style={styles.inputContainerH}>
                        <AppTextInput2 placeholder='Weight' width='45%' />
                        <AppTextInput2 placeholder='Age/Birthday' width='45%' />
                    </View >
                    <View style={styles.inputContainerV}>
                        <AppTextInput2 placeholder='Medical Issues/Medication' width='95%' />

                    </View>

                </View>


            </ImageBackground>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        minHeight: '100%',
        paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        alignSelf: 'center',
        fontSize: 20,
    },
    inputContainerH: {
        flexDirection: 'row',
        height: '5%',
        marginVertical: 5,
    },
    inputContainerV: {
        flexDirection: 'column',
        width: '100%',
        marginVertical: 20,



    }
})

export default ClientInfo;