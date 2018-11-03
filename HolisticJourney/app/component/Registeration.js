import React, { Component } from 'react';
import { TextInput, View,Alert, ScrollView} from 'react-native';
import Header from './common/Header';
import loginStyle from '../styleFiles/login.style';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import * as constants from '../Constants/Constants';

export default class Registration extends Component {
    constructor(props) {
        super(props);
       this.state = {
            mobile: '',
            pin: '',
            name: '',
           confirmPin: '',
            error:'',
            isLoading: false,
            isLoggedIn: false,
        }
}
    
    render(){
        return (
            <ScrollView>
            <View style={loginStyle.Container}> 
                <Header />  
                <Card style={{backgroundColor: 'pink'}}>
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
                keyboardType='number-pad'
                onChangeText={text => this.setState({mobile:text})}
                />
          </CardSection>
         
        <CardSection>
            <Input 
            secureTextEntry
            label={'pin'}
            placeholder={'pin'}
            value={this.state.pin}
            keyboardType='number-pad'
            onChangeText={text => this.setState({pin:text})}

            />
        </CardSection>
        <CardSection>
            <Input 
            secureTextEntry
            label={'Confim pin'}
            placeholder={'Confirm pin'}
            value={this.state.confirmPin}
            keyboardType='number-pad'
            onChangeText={text => this.setState({confirmPin:text})}

            />
        </CardSection>
{/* <Text style={styles.textErrorStyle}> {this.state.error}</Text> */}

           <CardSection style={{flex: 1,flexDirection: 'row', justifyContent:'space-evenly'}} >
                <Button btnDirection={'left'} whenPress={this.onClickRegister.bind(this)}>
                 Register
                </Button>
                <Button btnDirection={'right'} whenPress={this.onClickCancel.bind(this)}>
                 Cancel 
                </Button>
            </CardSection>
    </Card>
    </View>
     </ScrollView>
        );

    }
    onLoginSuccess(){
        
        alert('Success  ');
        this.setState({
           isLoading:false,
           error: '',
           mobile: '',
           pin: '' 
        })
     
     }
 
     onLoginFail(){
         this.setState({error:'AuthenticationFailed'});
         this.setState({
             isLoading:false,
          })
     }
 
     onClickRegister(){         
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
                } else {
                    if(confirmPin.length === 0){
                    alertMessage = constants.confirmPin;
                    }else{
                        if (pin !== confirmPin) {
                            alertMessage = constants.msgPinNotSame;
                        } else {
                            // Call api for login 
                        this.setState({isLoading:true,error:'' }) ;
                        this.props.navigation.navigate('TabNavigator',{response:this.state.response})
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

  onClickCancel(){
    console.log(' cancel ');
    this.props.navigation.navigate('LoginScreen')
  }
 
}
