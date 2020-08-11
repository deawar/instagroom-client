import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

const AppUserButton = (props) => {
    const { title, onPress, icon, color = colors.black, op, height = 180, width } = props;


    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }, { opacity: op }, { height: height }, { width: height }]} onPress={onPress}>
            {icon && <MaterialCommunityIcons name={icon} size={35} style={styles.icon} />}
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'column',
        height: 180,
        width: 180,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 90,
        borderStyle: 'solid',
        borderColor: colors.dark,
        borderWidth: 5,
    },
    text: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 18,
        color: colors.white,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: '20%'
    },
    icon: {
        color: colors.white,
    }
})

export default AppUserButton;