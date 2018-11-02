/** @format */
import React, { Component } from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { StackNavigator } from 'react-navigation';
import Login from './app/component/Login';
import Registration from './app/component/Registeration';

const AppNavigator = StackNavigator(
    {
      LoginScreen: { screen: Login },
      RegistrationScreen: { screen: Registration }
   },
    {
      initialRouteName: 'LoginScreen',
      headerMode: 'none',
      gesturesEnabled: false,
      
    },
  );

  export default class Start extends Component {
    render() {
      return (
        <AppNavigator />
      );
    }
  }
AppRegistry.registerComponent(appName, () => Start);
