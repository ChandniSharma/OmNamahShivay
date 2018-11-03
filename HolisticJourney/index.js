/** @format */
import React, { Component } from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { StackNavigator } from 'react-navigation';
import Login from './app/component/Login';
import Registration from './app/component/Registeration';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './app/component/Home';
import HomeDetail from './app/component/HomeDetail';
import Profile from './app/component/Profile';
import Schedule from './app/component/Schedule';
import Setting from './app/component/Setting';
import AddPatient from './app/component/AddPatient';

const HomeStack = StackNavigator({
  Home: Home,
  HomeDetail: HomeDetail,
  AddPatient:AddPatient
},{
  initialRouteName: 'Home',
  headerMode: 'none',
  gesturesEnabled: false,
});

const TabNavigator =  createBottomTabNavigator({
  Home: HomeStack,
  Profile: Profile,
  Schedule: Schedule,
  Setting: Setting,
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = '';
      } else if (routeName === 'Settings') {
        iconName = '';
      }
      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      // return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}
);


const AppNavigator = StackNavigator(
    {
      LoginScreen: { screen: Login },
      RegistrationScreen: { screen: Registration },
      TabNavigator:{screen: TabNavigator}
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
