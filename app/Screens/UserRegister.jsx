import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet,
    ImageBackground,
    View,
    Text,

} from 'react-native';

import AppScreen from '../components/AppScreen'
import AppTextInput2 from '../components/AppTextInput2'
import AppButton from '../components/AppButton';
import DropDown from '../components/DropDown';

const UserRegister = () => {

    const [firstName, setfirstName] = useState();
    const [lastName, setLastName] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zip, setZip] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [UserName, setUserName] = useState();
    const [passWord, setPassWord] = useState();
    const [passWord2, setPassWord2] = useState();
    const [country, setCountry] = useState();
    const userDataObj = {
        firstName,
        lastName,
        street,
        city,
        state,
        zip,
        phone,
        email,
        passWord,
        country
    };

    const handleTextEvent = (event) => {

        console.log(event.nativeEvent.text);
        setfirstName(event.nativeEvent.text)
    }




    return (
        < AppScreen >
            <ImageBackground style={styles.container} blurRadius={2} source={require('../../assets/grooming1.jpg')}>
                <View style={styles.inputsHor}>
                    <AppTextInput2
                        name='firstName'
                        placeholder="First Name"
                        width='40%'
                        onChange={event => setfirstName(event.nativeEvent.text)}

                    />
                    <AppTextInput2
                        placeholder="Last Name"
                        width='40%'
                        onChange={event => setLastName(event.nativeEvent.text)}
                    />
                </View>
                <View style={styles.inputsHor}>
                    <AppTextInput2
                        placeholder="Street"
                        onChange={event => setStreet(event.nativeEvent.text)}
                        width='75%'
                    />

                </View>
                <View style={styles.inputsHor}>
                    <AppTextInput2
                        placeholder="City"
                        onChange={event => setCity(event.nativeEvent.text)}
                        width='20%'
                    />
                    <AppTextInput2
                        placeholder="State"
                        onChange={event => setState(event.nativeEvent.text)}
                        width='20%'
                    />
                    <AppTextInput2
                        placeholder="Postal/Zip"
                        onChange={event => setZip(event.nativeEvent.text)}
                        width='20%'
                    />
                    <AppTextInput2
                        placeholder="Country"
                        width='20%'
                        onChange={event => setCountry(event.nativeEvent.text)}
                    />

                </View>
                <View style={styles.inputsVert}>
                    <AppTextInput2
                        placeholder="Phone"
                        width='50%'
                        onChange={event => setPhone(event.nativeEvent.text)}

                    />
                    <AppTextInput2
                        placeholder="UserName"
                        width='50%'
                        onChange={event => setUserName(event.nativeEvent.text)}

                    />
                    <AppTextInput2
                        placeholder="PassWord"
                        width='50%'
                        onChange={event => setPassWord(event.nativeEvent.text)}
                    />
                    <AppTextInput2
                        placeholder="PassWord2"
                        width='50%'
                        onChange={event => setPassWord2(event.nativeEvent.text)}
                    />
                </View>
                <AppButton
                    icon='account-box'
                    title='submit'
                    color='dark'
                    op={.75}
                    onPress={() => console.log(userDataObj)}
                />
                <DropDown />

            </ImageBackground>
        </AppScreen>



    );
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
