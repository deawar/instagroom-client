import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants'


import colors from '../config/colors'


const AppScreen = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.container, style]} >
            {children}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: Constants.statusBarHeight,
        margin: 5
    }
});

export default AppScreen;