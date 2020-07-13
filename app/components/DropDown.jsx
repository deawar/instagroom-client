import React, { useState } from 'react';
import {
    View,
    Picker,
    StyleSheet
} from 'react-native';



const DropDown = (props) => {

    const [selectedValue, setSelectedValue] = useState("Jenna Hastings");


    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Jenna Hastings" value="1" />
                <Picker.Item label="Tom Segura" value="2" />
                <Picker.Item label="Ben Carson" value="3" />
                <Picker.Item label="Malik Jennings" value="4" />
                <Picker.Item label="Dan Allen" value="5" />
            </Picker>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    }
})

export default DropDown;