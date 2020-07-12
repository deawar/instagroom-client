import React from "react";
import {
    StyleSheet,
} from 'react-native';

import "./style.css";



const AppNavWrapper = () => {
    return (
        <main style={styles.main} className="wrapper" {...props} />
    );
}
const styles = StyleSheet.create({
    main: {
        minHeight: '100%',
        paddingBottom: 100,
    }
})

export default AppNavWrapper;
