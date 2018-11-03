/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import Button from './app/component/common/Button';

// import Card from './app/component/common/Card';
// import CardSection from './app/component/common/CardSection';
// import Input from './app/component/common/Input';
// import homeStyle from './app/component/styleFiles/home.style';
// import Picker from 'react-native-picker';
// import loginStyle from './app/component/styleFiles/login.style';


export default class App extends Component{
  componentDidMount(){
    
}
openPicker(){
       
    let data = [];
    for(var i=0;i<100;i++){
        data.push(i);
    }
Picker.init({
    pickerData: data,
    selectedValue: [59],
    onPickerConfirm: data => {
        console.log(data);
    },
    onPickerCancel: data => {
        console.log(data);
    },
    onPickerSelect: data => {
        console.log(data);
    }
});
}
  render() {
    return (
      <View >
          {/* style={loginStyle.Container}>
                    <CardSection style={{flex: 1,flexDirection: 'row', justifyContent:'space-evenly'}} >
                            <Button btnDirection={'left'} whenPress={this.openPicker()}>
                            OpenPicker
                            </Button>
                    </CardSection> */}
      </View>
    );
  }
}

