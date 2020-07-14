import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import colors from '../config/colors';

const AppRadioButton = (props) => {
    const { text, textcolor } = props;
    const [selected, setSelected] = useState(false);

    return !selected ?
        <TouchableOpacity style={[styles.container, props.style,]} onPress={() => setSelected(!selected)}>
            <View style={[styles.button, { borderColor: colors[textcolor] }]} />
            <Text style={[styles.text, { color: colors[textcolor] }]}>{text}</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={[styles.container, props.style,]} onPress={() => setSelected(!selected)}>
            <View style={[styles.selected, { borderColor: colors[textcolor] }]} />
            <Text style={[styles.text, { color: colors[textcolor] }]}>{text}</Text>
        </TouchableOpacity>
};



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',


    },
    button: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 3,
        borderColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',

    },
    selected: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 3,
        borderColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        alignSelf: 'flex-end'
    }

})
export default AppRadioButton;