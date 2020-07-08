import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text

} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors'

const AppTextInput = ({ icon, placeholder, ...otherProps }) => {

    const [userName, setUserName] = useState('');
    return (
        <View style={styles.container}>
            <Text>{userName}</Text>
            {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={25} color={colors.black} />}

            <TextInput
                onChangeText={text => setUserName(text)}
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
        backgroundColor: colors.light,
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
        // borderBottomColor: colors.medium,
        // borderBottomWidth: 1,
    },
    icon: {
        marginRight: 10,
    }

})
export default AppTextInput;