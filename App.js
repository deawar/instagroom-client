import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppScreen from './app/components/AppScreen'
import AppButton from './app/components/AppButton';
import LoginScreen from './app/Screens/LoginScreen'
import UserRegister from './app/Screens/UserRegister';




export default function App() {
  return (
    // <LoginScreen />
    <UserRegister />
  )
}


