/** @format */
import React, { Component } from 'react';

import {AppRegistry, Image} from 'react-native';
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
// import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './app/styleFiles/tabBarIcon.style';

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
  VolentierList:Volentierlist,
  AppointmentList: AppointmentList,
  Settings: Profile,
 
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let image;
      if (routeName === 'Home') {
        image = focused? require('./app/assets/home_active.png'): require('./app/assets/home_inactive.png');;
      } else if (routeName === 'Settings') {
        image = focused? require('./app/assets/settings_active.png'): require('./app/assets/settings_inactive.png');;
      }else if (routeName === 'VolentierList'){
        image = focused? require('./app/assets/list_active.png'): require('./app/assets/list_inactive.png');
      }else if (routeName === 'AppointmentList'){
        image = focused? require('./app/assets/history_active.png'): require('./app/assets/history_inactive.png');
      }
     
       return (
        <Image 
            source={image}
            style={styles.homeIcon}
        />
    ); //<Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#c70301',
    inactiveTintColor: '#838383',
    // showLabel: false,
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
