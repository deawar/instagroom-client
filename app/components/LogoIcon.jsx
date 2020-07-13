import React from 'react';
import {
    Image,
    View,
    StyleSheet

} from 'react-native';

const LogoIcon = ({ size, ...props }) => {
    return (

        <Image style={[styles.icon, { height: size, width: size }]} source={require('../../assets/GM_icon.png')} />



    );
}

const styles = StyleSheet.create({
    icon: {
        height: 50,
        width: 50,
    },
});

export default LogoIcon;