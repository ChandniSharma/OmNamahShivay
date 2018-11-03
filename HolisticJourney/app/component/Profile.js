import React, { Component } from 'react';
import { TextInput, View, Text, Alert } from 'react-native';
import Header from './common/Header';
import loginStyle from '../styleFiles/login.style';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import * as constants from '../Constants/Constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mobile: '',
            city: '', 
            address: '',
            pin: '',
            confirmPin: '',
            error:'',
            isLoading: false,
            isLoggedIn: false,
        }
     }
     render(){
        return (
            <View style={loginStyle.Container}> 
                <Header /> 
                <KeyboardAwareScrollView style={loginStyle.container}>

                <Card>
                <CardSection>
                <Input 
                label={'Name'}
                placeholder={'Chandni'}
                value={this.state.name}
                onChangeText={text => this.setState({name:text})}
                />
          </CardSection>
            <CardSection>
                <Input 
                label={'Mobile'}
                prefix={'+91'}
                placeholder={'+918518016290'}
                value={this.state.mobile}
                onChangeText={text => this.setState({mobile:text})}
                />
          </CardSection>
          <CardSection>
            <Input 
            secureTextEntry
            label={'Confirm pin'}
            placeholder={'Confirm pin'}
            value={this.state.confirmPin}
            onChangeText={text => this.setState({confirmPin:text})}
            />
        </CardSection>
        <CardSection>
            <Input 
            secureTextEntry
            label={'pin'}
            placeholder={'pin'}
            value={this.state.pin}
            onChangeText={text => this.setState({pin:text})}

            />
        </CardSection>

{/* <Text style={styles.textErrorStyle}> {this.state.error}</Text> */}

           <CardSection style={{flex: 1,flexDirection: 'row', justifyContent:'space-evenly'}} >
                <Button btnDirection={'left'} whenPress={this.onClickUpdate.bind(this)}>
                 Update
                </Button>
            </CardSection>
            <CardSection style={{flex: 1,flexDirection: 'row', justifyContent:'space-evenly'}} >
                <Button btnDirection={'left'} whenPress={this.onClickLogout.bind(this)}>
                Logout
                </Button>
            </CardSection>
    </Card>
    </KeyboardAwareScrollView>
    </View>
        );
    }
    onClickUpdate(){         
        const  {mobile,pin, confirmPin,name} = this.state;
        let alertMessage='';

        if (name.length === 0) {
            alertMessage = constants.msgName;
        } else {
            if (mobile.length === 0 || mobile.length<10) {
            alertMessage = constants.msgMobileNumber;
            } else {
                if (pin.length === 0) {
                    alertMessage = constants.msgPin;
                }  if (pin.length <=3 || pin.length>4 ) {
                    alertMessage = constants.msgPinLength;
                 } else {
                    if(confirmPin.length === 0){
                    alertMessage = constants.confirmPin;
                    }else{
                        if (pin !== confirmPin) {
                            alertMessage = constants.msgPinNotSame;
                        } else {
                            if (pin.length != 4) {
                                alertMessage = constants.msgPinLength;
                            } else {
                            // Call api for update 
                        this.setState({isLoading:true,error:'' }) ;
                        alertMessage = constants.msgProfileUpdate;
                            }
                        }
                    }
                }
            }
    }
    if (alertMessage.length>1) {
        Alert.alert(
            '',
            alertMessage,
            [
              {text: constants.titleOk, onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: false }
          )
     }
       //  this.props.navigation.navigate('TabNavigator',{response:this.state.response})
 }
 onClickLogout(){
    console.log(' Profile update ');
    Alert.alert(
        constants.titleAlertLogout,
        constants.msgLogout,
        [
          {text: constants.titleCancel, onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: constants.titleOk, onPress: () => this.callLogoutApi()},
        ],
        { cancelable: false }
      )

    // Validate empty condition 
    // Call api 
    this.setState({isLoading:true,error:'' }) ;
   }
   callLogoutApi(){
    console.log('OK Pressed');
    this.props.navigation.navigate('LoginScreen')
   }
}
 

