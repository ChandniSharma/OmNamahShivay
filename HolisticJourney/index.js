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
import Receipt from './app/component/Receipt';
import Profile from './app/component/Profile';
import AppointmentList from './app/component/History/AppointmentList';
import Volentierlist from './app/component/Volentier/VolentierList';
import AddPatient from './app/component/AddPatient';
import PickerEx from './app/component/PickerEx';
const HomeStack = StackNavigator({
  Home: Home,
  Receipt: Receipt,
  AddPatient:AddPatient
},{
  initialRouteName: 'Home',
  headerMode: 'none',
  gesturesEnabled: false,
});

const TabNavigator =  createBottomTabNavigator({
  Home: HomeStack,
  Volentierlist:Volentierlist,
  AppointmentList: AppointmentList,
  Profile: Profile,
 
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
      PickerEx: {screen: PickerEx},
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
