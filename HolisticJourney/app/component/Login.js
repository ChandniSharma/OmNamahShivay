import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import Header from './common/Header';
import loginStyle from './styleFiles/login.style';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';


export default class Login extends Component {

    state = {
        mobile: '',
        pin: '',
        error:'',
        isLoading: false,
        isLoggedIn: false,
    };
    
    render(){
        return (
            <View style={loginStyle.Container}> 
                <Header />  
                <Card style={{backgroundColor: 'pink'}}>
            <CardSection>
                <Input 
                label={'Mobile'}
                placeholder={'+918518016290'}
                value={this.state.mobile}
                onChangeText={text => this.setState({mobile:text})}
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
                <Button btnDirection={'left'} whenPress={this.onClickSignin.bind(this)}>
                 Sign in 
                </Button>
                <Button btnDirection={'right'} whenPress={this.onClickSignup.bind(this)}>
                 Sign up 
                </Button>
            </CardSection>
    </Card>
    </View>
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
 
     onClickSignin(){
 
         console.log(' Signin ');
         // Validate empty condition 
         // Call api 
         const  {email,password} = this.state;
 
         this.setState({isLoading:true,error:'' }) ;
        
  }
  onClickSignup(){
    console.log(' Signup ');
    this.props.navigation.navigate('RegistrationScreen')
  }
 
 }
