import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,

} from 'react-native';

import AppScreen from '../components/AppScreen'
import colors from '../config/colors'
import AppTextInput2 from '../components/AppTextInput2';
import AppBackButton from '../components/AppBackButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Billing = ({ history }) => {
    return (
        <AppScreen>
            <ImageBackground style={styles.container} blurRadius={2} source={require('../../assets/dog_banker.jpg')}>
                <ScrollView style={styles.scroll}>
                    <AppBackButton onPress={() => history.push('/userpage')} />
                    <View style={[styles.styleHorizontal, { alignItems: 'center', justifyContent: 'center' }]}>
                        <MaterialCommunityIcons style={{ color: colors.white }} name='account' size={25} />
                        <Text style={styles.header}>CUSTOMER BILLING</Text>
                    </View>
                    <View style={styles.styleHorizontal} >
                        <AppTextInput2 placeholder='First Name' width='45%' />
                        <AppTextInput2 placeholder='Last Name' width='45%' />
                    </View>
                    <View>
                        <AppTextInput2 placeholder='Phone' width='60%' />
                        <AppTextInput2 placeholder='Email' width='60%' />
                        <AppTextInput2 placeholder='Street' width='80%' />
                    </View>
                    <View style={styles.styleHorizontal}>
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
                            width='40%' />

                    </View>
                </ScrollView>

            </ImageBackground>
        </AppScreen >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
    },
    header: {
        // alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        marginVertical: 10,

    },
    scroll: {
        // backgroundColor: colors.black,
        padding: 5,
        borderColor: colors.white,
        borderWidth: 1,

    },
    styleHorizontal: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    styleVertical: {
        flexDirection: 'column'
    }

})

export default Billing;