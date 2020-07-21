import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,

} from 'react-native';

import colors from '../config/colors'
import AppButton from './AppButton'


const DropDown = (props) => {

    const listData = props.data || [
        {
            key: 1,
            user: 'Andrew Murray',
            dog: 'Basil the Great',
            address: '1234 Wameia Lane, Hilo, HI 96720'
        },
        {
            key: 2,
            user: 'Dan Allen',
            dog: 'Gregor',
            address: '123 Atlanta Rd., Atlanta, GA 30309'
        },
        {
            key: 3,
            user: 'b',
            dog: 'c',
            address: 'd'
        },
        {
            key: 4,
            user: 'a',
            dog: 'b',
            address: 'c',

        }
    ]

    const [show, setShow] = useState(false)
    const [data, setData] = useState(listData)



    return !show ?
        <AppButton
            title='Show Data'
            icon='account-settings'
            color='dark'
            onPress={() => setShow(!show)}
            height={props.height}
        />
        :
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => setShow(!show)}
                    >
                        <Text>{item.user}  Pet:{item.dog}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>


}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        alignItems: "center",
        height: 300,
    },
    listItem: {
        height: 50,
        backgroundColor: colors.light,
        borderWidth: 2,
        borderColor: colors.danger,
        borderRadius: 3,
        marginVertical: 3,
        alignItems: 'center'
    }
})

export default DropDown;