import React, { Component, useEffect, useContext } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
} from 'react-native';

import AppUserButton from '../components/AppUserButton';
import AppScreen from '../components/AppScreen';
import { UserContext } from '../util/UserContext'


class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <AppScreen>
                <ImageBackground style={styles.container} blurRadius={3} source={require('../../assets/dog_secretary.png')}>

                    <View style={styles.buttonContainer}>
                        <AppUserButton icon='book' color='black' op={.75} title='View Schedule ' onPress={() => this.props.history.push('/schedule')} />
                        <AppUserButton icon='book' color='black' op={.75} title=' Set Appointment' onPress={() => this.props.history.push('/setappointment')} />
                    </View >
                    <View style={styles.buttonContainer}>
                        <AppUserButton icon='logout' color='black' op={.75} title='Logout'
                            onPress={() => (
                                this.props.history.push('/'))
                            }
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <AppUserButton icon='book' color='black' op={.75} title='Billing Form' onPress={() => this.props.history.push('/billing')} />
                        <AppUserButton icon='book' color='black' op={.75} title='Enter Client Info'
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