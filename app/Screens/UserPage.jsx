import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
} from 'react-native';

import AppNavBar from '../components/AppNavBar'
import AppUserButton from '../components/AppUserButton';
import AppScreen from '../components/AppScreen';

class UserPage extends Component {

    state = {

    }
    render() {
        return (
            <AppScreen>
                <ImageBackground style={styles.container} blurRadius={3} source={require('../../assets/dog_secretary.png')}>

                    <View style={styles.buttonContainer}>
                        <AppUserButton icon='book' color='light' op={.75} title='Set Appointment' />
                        <AppUserButton icon='book' color='light' op={.75} title=' Schedule' />
                    </View >
                    <View style={styles.buttonContainer}>
                        <AppUserButton icon='logout' color='light' op={.75} title='Logout'
                            onPress={() => this.props.history.push('/')} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <AppUserButton icon='book' color='light' op={.75} title='Billing Form' />
                        <AppUserButton icon='book' color='light' op={.75} title='Enter Client Info'
                            onPress={() => this.props.history.push('/clientinfo')} />

                    </View>

                </ImageBackground>




            </AppScreen>




        );
    }
}


const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',


    },
    container: {
        flex: 1,
        height: '100%',

        justifyContent: 'space-around'
    },
})

export default UserPage;