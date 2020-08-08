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



    const [show, setShow] = useState(false)
    const [data, setData] = useState(listData)
    const [listData, setListData] = useState([
        {
            key: '1',
            service: 'Shampoo',
            fee: '15.00',
            value: false
        },
        {
            key: '2',
            service: 'Haircut',
            fee: '25.00',
            value: false
        },
        {
            key: '3',
            service: 'Dental',
            fee: '10.00',
            value: false
        },
        {
            key: '4',
            service: 'Nail Clip',
            fee: '20.00',
            value: false
        },
        {
            key: '5',
            service: 'Cut and Perm',
            fee: '80.00',
            value: false
        },
        {
            key: '6',
            service: 'Dye job',
            fee: '150.00',
            value: false
        },
        {
            key: '7',
            service: 'The full package',
            fee: '75.00',
            value: false
        },

    ]);
    const addBadge = (obj) => {
        let state = listData;
        state = state.map(el => {
            return obj.service === el.service ?
                obj : el
        })
        setListData([...state])
    }

    const removeBadge = (obj) => {
        let state = listData;
        state = state.map(el => {
            return obj.service === el.service ?
                obj : el
        })
        setListData([...state])
    }



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
                data={listData}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => console.log(item)}
                    >
                        <Text style={styles.listItemText}>{item.service}  ${item.fee} </Text>
                        <AppButton
                            // title='+'
                            icon='plus-box'
                            width={'15%'}
                            height={60}
                            onPress={() => (props.pressAddButton(
                                {
                                    key: item.key,
                                    service: item.service,
                                    fee: item.fee,
                                }
                            ), addBadge(
                                {
                                    key: item.key,
                                    service: item.service,
                                    fee: item.fee,
                                    value: true
                                }
                            )
                            )
                            }

                        />
                        <AppButton
                            // title='+'
                            icon='minus-box'
                            width={'15%'}
                            height={80}
                            onPress={() => (props.pressRemButton({
                                key: item.key,
                                service: item.service,
                                fee: item.fee
                            }),
                                addBadge(
                                    {
                                        key: item.key,
                                        service: item.service,
                                        fee: item.fee,
                                        value: false
                                    }
                                )
                            )

                            }
                        />
                        {item.value && <AppButton
                            icon='check-decagram'
                            width={'15%'}
                            height={80}
                        />}
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
        alignItems: 'center',
        height: 220,
        width: 400,
        zIndex: 9999
    },
    listItem: {
        height: 50,
        width: 400,
        backgroundColor: colors.dark,
        borderRadius: 3,
        marginVertical: 3,
        marginHorizontal: 0,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderRadius: 30,
        opacity: .75,
    },
    listItemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.white,
        marginLeft: 8,
        marginRight: 50
    },

})

export default DropDown;