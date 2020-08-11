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
import Billing from './app/Screens/Billing';
import SetAppointment from './app/Screens/SetAppointment';
import { UserProvider } from './app/util/UserContext';
import Verify from './app/Screens/Verify';




export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <UserProvider >
            <Route exact path='/' component={LoginScreen} />
            <Route exact path='/register' component={UserRegister} />
            <Route exact path='/userpage' component={UserPage} />
            <Route exact path='/route' component={UserRoute} />
            <Route exact path='/clientinfo' component={ClientInfo} />
            <Route exact path='/schedule' component={Schedule} />
            <Route exact path='/setappointment' component={SetAppointment} />
            <Route exact path='/billing' component={Billing} />
            <Route exact path='/verify' component={Verify} />
          </UserProvider>
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
