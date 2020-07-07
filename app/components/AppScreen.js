import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import colors from '../config/colors'


const AppScreen = ({ children }) => {
    return (
        <View style={styles.container} >
            {children}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default AppScreen;