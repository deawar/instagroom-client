import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppScreen from './app/components/AppScreen'
import AppButton from './app/components/AppButton';




export default function App() {
  return (
    <AppScreen >
      <AppButton title='Instagroom.me 1st Button' color='red' onPress={() => console.log('Im working')} />
    </AppScreen>
  );
}


