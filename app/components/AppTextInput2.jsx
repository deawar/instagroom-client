
import React from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    View

} from 'react-native';

import colors from '../config/colors'

const AppTextInput2 = (props) => {

    const { placeholder, onChange, width } = props;
    return (

        <TextInput style={[styles.button, { width: width }]}
            placeholder={placeholder}
            onChange={onChange}

        />

    );
}

const styles = StyleSheet.create({
    button: {
        color: colors.black,
        fontSize: 18,
        backgroundColor: colors.white,
        height: 35,
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: colors.black,
        textAlign: 'left',
        padding: 2,
        marginHorizontal: 5,
        marginVertical: 5,
    }
})

export default AppTextInput2;