import React, { useEffect, useState, useContext } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Button
} from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import AppScreen from '../components/AppScreen';
import colors from '../config/colors';
import AppBackButton from '../components/AppBackButton';
import NavigateButton from '../components/NavigateButton'
import AppButton from '../components/AppButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Polyline from '@mapbox/polyline';
import Axios from 'axios';
import { UserContext } from '../util/UserContext'

const Route = ({ history }) => {
  const { client } = useContext(UserContext);
  const [clientValue, setClient] = client;
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [clientLocation, setClientLocation] = useState(false);
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    console.log(clientValue)
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
          longitude: location.coords.longitude,
        });
        console.log('My User --', userLocation);
      })();
    }
  }, []);

  const getDirections = (origin, destination) => {
    console.log('StartLocation ', origin);
    console.log('destinationLocation ', destination);

    Axios({
      method: 'post',
      url: 'https://www.instagroom.me/api/getDirection',
      data: {
        origin: origin,
        clientAddress: destination

      },
    })
      .then((response) => {
        console.log(response.data.result.destinationCoords)
        setClientLocation({
          latitude: response.data.result.destinationCoords.lat,
          longitude: response.data.result.destinationCoords.lng,
        })
        let points = Polyline.decode(response.data.result.directionPoints);
        let coords = points.map((point, index) => {
          return {
            latitude: point[0],
            longitude: point[1],
          };
        });
        setCoords(coords);
        return coords;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AppScreen
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ScrollView style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <AppBackButton onPress={() => history.push('/schedule')} />
          <AppButton
            title='Route'
            icon='map-check'
            height={60}
            color='dark'
            // style={styles.route}
            onPress={() =>
              getDirections(
                {
                  userLat: userLocation.latitude,
                  userLng: userLocation.longitude,
                },
                clientValue.customerAddress
              )
            }
          />
        </View>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          showsCompass={true}
          showsUserLocation={true}
          showsTraffic={true}
          followUserLocation={true}
          zoomEnabled={true}
        >
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title={'Your Location'}
          >
            <MaterialCommunityIcons
              name='dog'
              size={30}
              color={colors.primary}
            />
          </Marker>
          <Marker
            coordinate={{
              latitude: clientLocation.latitude,
              longitude: clientLocation.longitude,
            }}
            title={'Client'}
          >
            {clientLocation && <MaterialCommunityIcons
              name='dog'
              size={30}
              color={colors.primary}
            />}
          </Marker>
          <MapView.Polyline
            coordinates={coords}
            strokeWidth={5}
            strokeColor='red'
          />
        </MapView>
      </ScrollView>
    </AppScreen>
  );
};

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
    flexWrap: 'wrap',
  },
  styleVertical: {
    flexDirection: 'column',
  },
  headerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: colors.white,
    borderBottomWidth: 2,
  },
});

export default Route;
