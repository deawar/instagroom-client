import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,

} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import AppScreen from '../components/AppScreen';
import colors from '../config/colors'
import AppBackButton from '../components/AppBackButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Route = ({ history }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [userLocation, setUserLocation] = useState({ latitude: 0, longitude: 0 });


    useEffect(() => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            setErrorMsg(
                'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
            );
        } else {
            (async () => {
                let { status } = await Location.requestPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                }

                let location = await Location.getCurrentPositionAsync({});
                setLocation(location);
                setUserLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                })
            })();
        }
    }, []);



    return (
        <AppScreen style={{
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <ScrollView style={styles.container}>
                <AppBackButton onPress={() => history.push('/schedule')} />
                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    region={{
                        latitude: userLocation.latitude,
                        longitude: userLocation.longitude,
                        latitudeDelta: .05,
                        longitudeDelta: .05
                    }}>
                    <Marker
                        coordinate={{
                            latitude: userLocation.latitude,
                            longitude: userLocation.longitude
                        }}
                    ><MaterialCommunityIcons name='dog' size={50} color={colors.secondary} /></Marker>
                </MapView>

            </ScrollView>


        </AppScreen>

    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        borderRadius: 7,
        width: Dimensions.get('window').width - 20,

    },
    map: {
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height - 10,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',


    },
    styleHorizontal: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    styleVertical: {
        flexDirection: 'column'
    },
    headerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: colors.white,
        borderBottomWidth: 2,

    },

})

export default Route;
