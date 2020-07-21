import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,

} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

const AppRouteButton = ({ onPress, ...props }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <MaterialCommunityIcons name='map' size={24} color={colors.white} />
            <Text style={styles.buttonText}>Route</Text>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        width: 95,
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,

    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default AppRouteButton;