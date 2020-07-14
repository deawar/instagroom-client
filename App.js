import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { NativeRouter, Switch, Route } from "react-router-native";



import LoginScreen from './app/Screens/LoginScreen'
import UserRegister from './app/Screens/UserRegister';
import UserRoute from './app/Screens/Route'
import UserPage from './app/Screens/UserPage'
import ClientInfo from './app/Screens/ClientInfo'
import Schedule from './app/Screens/Schedule'




export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path='/' component={LoginScreen} />
          <Route exact path='/register' component={UserRegister} />
          <Route exact path='/userpage' component={UserPage} />
          <Route exact path='/route' component={UserRoute} />
          <Route exact path='/clientinfo' component={ClientInfo} />
          <Route exact path='/schedule' component={Schedule} />
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
