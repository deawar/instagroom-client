import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Button,

} from 'react-native';

import colors from '../config/colors'
import AppButton from './AppButton'


const DropDown = (props) => {

    const listData = props.data || [
        {
            key: '1',
            service: 'Shampoo',
            price: '15.00'
        },
        {
            key: '2',
            service: 'Haircut',
            price: '25.00',
        },
        {
            key: '3',
            service: 'Dental',
            price: '10.00',
        },
        {
            key: '4',
            service: 'Nail Clip',
            price: '20.00',
        },
        {
            key: '5',
            service: 'Cut and Perm',
            price: '80.00',
        },
        {
            key: '6',
            service: 'Dye job',
            price: '150.00',
        },
        {
            key: '7',
            service: 'The full package',
            price: '75.00',
        },

    ]

    const [show, setShow] = useState(false)
    const [data, setData] = useState(listData)



    return !show ?
        <AppButton
            title={props.title}
            icon='account-settings'
            color='dark'
            onPress={() => setShow(!show)}
            height={props.height}
        />
        :
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={
                    <>
                        <AppButton
                            title='close'
                            icon='close-box'
                            color='medium'
                            onPress={() => setShow(!show)}
                            height={50}
                        />
                    </>
                }
                data={data}
                value={props.value}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => console.log(item)}
                    >
                        <Text style={styles.listItemText}>{item.service}  ${item.price}</Text>
                        <AppButton
                            name='plus-box'
                            color='dark'
                            width={35}
                            height={35}
                        />
                        {/* <TouchableOpacity
                            style={styles.listButton}
                        ><Text style={{ fontSize: 24, color: colors.white }}>+</Text></TouchableOpacity> */}
                    </TouchableOpacity>
                )}

                ListFooterComponent={
                    <>
                        <AppButton
                            title='close'
                            icon='close-box'
                            color='medium'
                            onPress={() => setShow(!show)}
                            height={50}
                        />
                    </>
                }
            />
        </View>


}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        alignItems: "center",
        height: 300,
    },
    listItem: {
        height: 50,
        width: 300,
        backgroundColor: colors.light,
        borderWidth: 2,
        borderColor: colors.danger,
        borderRadius: 3,
        marginVertical: 3,
        alignItems: 'center',
        flexDirection: 'row'
    },
    listItemText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    listButton: {
        height: 25,
        width: 25,
        backgroundColor: colors.dark,
        borderRadius: 2,
        borderColor: colors.black,
        alignItems: 'center',
    }
})

export default DropDown;