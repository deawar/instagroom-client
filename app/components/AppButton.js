import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,


} from 'react-native';

import colors from '../config/colors'

const AppButton = ({ title, onPress, color = colors.primary }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>
                {title}
            </Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        height: '8%',
        width: '75%',
        marginVertical: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 15,
        borderRadius: 5,
    },
    text: {
        fontSize: 18,
        color: colors.black,
        textTransform: 'uppercase',
        fontWeight: '500',

    }
})

export default AppButton;