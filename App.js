import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { NativeRouter, Switch, Route } from "react-router-native";



import LoginScreen from './app/Screens/LoginScreen'
import UserRegister from './app/Screens/UserRegister';
import ClientRoute from './app/Screens/ClientRoute'



export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path='/' component={LoginScreen} />
          <Route exact path='/register' component={UserRegister} />
          <Route exact path='/route' component={ClientRoute} />

        </Switch>
      </View>
    </NativeRouter>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
