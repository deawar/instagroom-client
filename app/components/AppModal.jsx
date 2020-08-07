import React, { useState } from 'react';
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import colors from '../config/colors';

const AppModal = ({ buttonText = 'show', modalButtonText = 'hide', modalText = 'modal text', children }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {children}
                        <Text style={styles.modalText}>{modalText}</Text>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>{modalButtonText}</Text>
                        </TouchableHighlight>

                    </View>
                </View>
            </Modal>

            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <Text style={styles.textStyle}>{buttonText}</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        width: '75%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: colors.dark,
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        marginBottom: 16,
        textAlign: 'center'
    }
});

export default AppModal;
