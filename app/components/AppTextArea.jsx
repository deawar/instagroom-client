import React from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet

} from 'react-native';
import colors from '../config/colors'

const AppTextArea = ({ placeholder, style, onChange, ...props }) => {
    return (
        <View style={[styles.container, { style }]}>
            <TextInput
                style={styles.input}
                multiline={true}
                numberOfLines={12}
                textAlignVertical='top'
                placeholder={placeholder}
                onChange={onChange}
            />
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
        marginLeft: 10,
        marginTop: 10,
    },
    input: {
        width: '98%',
        height: '98%',
        justifyContent: 'flex-start'
    }
})

export default AppTextArea;