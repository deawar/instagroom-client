import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,


} from 'react-native';

import colors from '../config/colors'

const AppButton = ({ title, onPress, color = colors.primary, op }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }, { opacity: op }]} onPress={onPress}>
            <Text style={styles.text}>
                {title}
            </Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {

        // backgroundColor: colors.primary,
        height: '8%',
        width: '75%',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 15,
        borderRadius: 5,
        // opacity: .7,
    },
    text: {
        fontSize: 18,
        color: colors.white,
        textTransform: 'uppercase',
        fontWeight: '500',

    }
})

export default AppButton;