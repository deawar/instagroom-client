import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text

} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import colors from '../config/colors'

const AppTextInput = (props) => {
    const { icon, placeholder, ...otherProps } = props;

    const [userInput, setUserInput] = useState('');
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={25} color={colors.black} />}

            <TextInput
                onChangeText={text => setUserInput(text)}
                placeholder={placeholder}
                style={styles.text}
                {...otherProps}
            />

        </View>


    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: 25,
        width: '75%',
        padding: 15,
        marginVertical: 10,
        opacity: .6

    },
    text: {
        width: '85%',
        color: colors.dark,
        fontSize: 18,

    },
    icon: {
        marginRight: 10,
    }

})
export default AppTextInput;