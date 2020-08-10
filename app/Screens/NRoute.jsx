// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
// import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// import * as Location from 'expo-location';
// import Constants from 'expo-constants';
// import AppScreen from '../components/AppScreen';
// import colors from '../config/colors';
// import AppBackButton from '../components/AppBackButton';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import Polyline from '@mapbox/polyline';
// import MapViewDirections from 'react-native-maps-directions'

// const GoogleApiKey = '';

// const NRoute = ({ history }) => {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [userLocation, setUserLocation] = useState({
//     latitude: 0,
//     longitude: 0,
//   });
//   const [clientLocation, setClientLocation] = useState({
//     latitude: 33.9809694,
//     longitude: -84.2196431,
//   });
//   const [coords, setCoords] = useState([]);

//   // const getDirections = (start, finish) => {
//   //     try {
//   //         let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${userLocation.latitude},${userLocation.longitude}&destination=${clientLocation.latitude},${clientLocation.longitude}&key=${GoogleApiKey}`)
//   //         let respJson = await resp.json();
//   //         let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
//   //         let coords = points.map((point, index) => {
//   //             return {
//   //                 latitude: point[0],
//   //                 longitude: point[1]
//   //             }
//   //         })

//   //         return coords
//   //     } catch (error) {
//   //         alert(error)
//   //         return error
//   //     }
//   // }

//   useEffect(() => {
//     if (Platform.OS === 'android' && !Constants.isDevice) {
//       setErrorMsg(
//         'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
//       );
//     } else {
//       (async () => {
//         let { status } = await Location.requestPermissionsAsync();
//         if (status !== 'granted') {
//           setErrorMsg('Permission to access location was denied');
//         }

//         let location = await Location.getCurrentPositionAsync({});
//         setLocation(location);
//         setUserLocation({
//           latitude: location.coords.latitude,
//           longitude: location.coords.longitude,
//         });
//       })();
//     }
//   }, []);

//   return (
//     <AppScreen
//       style={{
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <ScrollView style={styles.container}>
//         <AppBackButton onPress={() => history.push('/schedule')} />
//         <MapView
//           style={styles.map}
//           provider={PROVIDER_GOOGLE}
//           region={{
//             latitude: userLocation.latitude,
//             longitude: userLocation.longitude,
//             latitudeDelta: 0.05,
//             longitudeDelta: 0.05,
//           }}
//           showsCompass={true}
//           showsUserLocation={true}
//           showsTraffic={true}
//           followUserLocation={true}
//           zoomEnabled={true}
//         >
//           <Marker
//             coordinate={{
//               latitude: userLocation.latitude,
//               longitude: userLocation.longitude,
//             }}
//             title={'Your Location'}
//           >
//             <MaterialCommunityIcons
//               name='dog'
//               size={30}
//               color={colors.secondary}
//             />
//           </Marker>
//           <Marker
//             coordinate={{
//               latitude: clientLocation.latitude,
//               longitude: clientLocation.longitude,
//             }}
//             title={'Client'}
//           >
//             <MaterialCommunityIcons
//               name='dog'
//               size={30}
//               color={colors.secondary}
//             />
//           </Marker>
//           <MapViewDirections
//             origin={{
//                 latitude: userLocation.latitude,
//                 longitude: userLocation.longitude,
//               }}
//             destination={{
//                 latitude: clientLocation.latitude,
//                 longitude: clientLocation.longitude,
//               }}
//             // waypoints={this.state.coordinates.slice(1, -1)}
//             mode='DRIVING'
//             apikey= {GOOGLE_API_KEY}
//             language='en'
//             strokeWidth={5}
//             strokeColor='red'
//             onStart={(params) => {
//               console.log(
//                 `Started routing between "${params.origin}" and "${
//                   params.destination}"`
//               );
//             }}
//             resetOnChange={false}
//           />
//         </MapView>
//       </ScrollView>
//     </AppScreen>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     borderRadius: 7,
//     width: Dimensions.get('window').width - 20,
//   },
//   map: {
//     width: Dimensions.get('window').width - 20,
//     height: Dimensions.get('window').height - 10,
//     borderRadius: 7,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   styleHorizontal: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   styleVertical: {
//     flexDirection: 'column',
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderBottomColor: colors.white,
//     borderBottomWidth: 2,
//   },
// });

// export default NRoute;
