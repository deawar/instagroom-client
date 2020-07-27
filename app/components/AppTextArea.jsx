import React from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet

} from 'react-native';
import colors from '../config/colors'

const AppTextArea = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                multiline={true}
                numberOfLines={12}
                textAlignVertical="top" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '98%',
        borderColor: colors.medium,
        borderWidth: 2,
        borderRadius: 5
    }
})

export default AppTextArea;