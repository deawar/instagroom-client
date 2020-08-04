
import React from 'react';
import {
    StyleSheet,
    TextInput,
} from 'react-native';

import colors from '../config/colors'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const AppTextInput2 = ({ onChangeText, placeholder, onChange, width, name, value, ...props }) => {

    return (

        <TextInput style={[styles.input, { width: width }]}
            placeholder={placeholder}
            onChange={onChange}
            onChangeText={onChangeText}
            name={name}
            selectionColor={colors.danger}
            value={value}

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
        paddingVertical: 3,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginVertical: 5,

    }
})

export default AppTextInput2;