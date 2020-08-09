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
import Polyline from '@mapbox/polyline'
import AppButton from '../components/AppButton'

const GoogleApiKey = 'AIzaSyA4R5VAItbCh_G_3-mxJ9zg2U7YvVjcSjI'

const Route = ({ history }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [userLocation, setUserLocation] = useState({ latitude: 0, longitude: 0 });
    const [clientLocation, setClientLocation] = useState({ latitude: 33.9809694, longitude: -84.2196431 })
    const [coords, setCoords] = useState([]);

    // const getDirections = (start, finish) => {
    //     try {
    //         let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${userLocation.latitude},${userLocation.longitude}&destination=${clientLocation.latitude},${clientLocation.longitude}&key=${GoogleApiKey}`)
    //         let respJson = await resp.json();
    //         let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
    //         let coords = points.map((point, index) => {
    //             return {
    //                 latitude: point[0],
    //                 longitude: point[1]
    //             }
    //         })


    //         return coords
    //     } catch (error) {
    //         alert(error)
    //         return error
    //     }
    // }


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
                <View style={{ flexDirection: 'row' }}>
                    <AppBackButton onPress={() => history.push('/schedule')} />
                    <AppButton
                        title='See Route'
                        icon='map-check'
                        height={50}
                        width={150}
                        color='primary'
                        onPress={() => console.log(location)}
                    />
                </View>
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
                    ><MaterialCommunityIcons
                            name='dog'
                            size={50}
                            color={colors.secondary}
                        /></Marker>
                    <Marker
                        coordinate={{
                            latitude: clientLocation.latitude,
                            longitude: clientLocation.longitude
                        }}
                    ><MaterialCommunityIcons
                            name='dog'
                            size={50}
                            color={colors.secondary}
                        /></Marker>


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
