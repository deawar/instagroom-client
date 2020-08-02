
import React from 'react';
import {
    StyleSheet,
    TextInput,
} from 'react-native';

import colors from '../config/colors'

const AppTextInput2 = ({ onChangeText, placeholder, onChange, width, name, ...props }) => {

    return (

        <TextInput style={[styles.input, { width: width }]}
            placeholder={placeholder}
            onChange={onChange}
            onChangeText={onChangeText}
            name={name}
        />

    );
}

const styles = StyleSheet.create({
    input: {
        color: colors.black,
        fontSize: 18,
        backgroundColor: colors.white,
        height: 40,
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: colors.black,
        textAlign: 'left',
        padding: 3,
        marginHorizontal: 5,
        marginVertical: 5,

    }
})

export default AppTextInput2;