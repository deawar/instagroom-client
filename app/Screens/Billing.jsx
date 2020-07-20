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
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import AppButton from '../components/AppButton'
const Billing = ({ history }) => {
    return (
        <AppScreen>
            <ImageBackground style={styles.container} blurRadius={2} source={require('../../assets/dog_banker.jpg')}>
                <ScrollView style={styles.scroll}>
                    <AppBackButton onPress={() => history.push('/userpage')} />
                    <View style={styles.headerContainer}>
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
                    <View style={styles.headerContainer}>
                        <Entypo name='scissors' size={25} color={colors.white} />
                        <Text style={styles.header}>Payment Info</Text>
                    </View>
                    <View style={[styles.styleVertical, { paddingBottom: 50 }]}>
                        <AppTextInput2 placeholder='Name on Card' width='80%' />
                        <AppTextInput2 placeholder='Card Number' width='80%' />
                        <AppTextInput2 placeholder='Card Type' width='40%' />
                        <AppTextInput2 placeholder='exp ##/##' width='20%' />
                        <AppTextInput2 placeholder='Fees' width='80%' />
                        <AppTextInput2 placeholder='Transaction Notes' width='80%' />
                        <AppButton
                            icon='credit-card-outline'
                            title='Submit Payment'
                            height='20%'
                            color='black'
                            op={.7}
                            onPress={() => history.push('./userpage')}
                        />
                    </View>
                    <View />


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
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        marginVertical: 10,
        marginLeft: 5,

    },
    scroll: {
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
    },
    headerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: colors.white,
        borderBottomWidth: 2,

    },

})

export default Billing;