import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,


} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

const AppButton = ({ title, onPress, icon, color = colors.primary, op }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }, { opacity: op }]} onPress={onPress}>
            {icon && <MaterialCommunityIcons name={icon} size={25} style={styles.icon} />}
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
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
    },
    icon: {
        color: colors.white,
        // backgroundColor: colors.white,
        marginRight: 15,


    }
})

export default AppButton;