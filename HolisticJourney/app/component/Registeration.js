import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import Header from './common/Header';
import loginStyle from './styleFiles/login.style';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';

export default class Registration extends Component {
    constructor(props) {
        super(props);
        state = {
            mobile: '',
            pin: '',
            name: '',
            city: '', 
            address: '',
            error:'',
            isLoading: false,
            isLoggedIn: false,
        }
}
    
    render(){
        return (
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
                placeholder={'+918518016290'}
                value={this.state.mobile}
                onChangeText={text => this.setState({mobile:text})}
                />
          </CardSection>
          <CardSection>
                <Input 
                label={'City'}
                placeholder={'Bhopal'}
                value={this.state.city}
                onChangeText={text => this.setState({city:text})}
                />
          </CardSection>
          <CardSection>
                <Input 
                label={'Address'}
                placeholder={'Address'}
                value={this.state.address}
                onChangeText={text => this.setState({address:text})}
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
                <Button btnDirection={'left'} whenPress={this.onClickRegister.bind(this)}>
                 Register
                </Button>
                <Button btnDirection={'right'} whenPress={this.onClickCancel.bind(this)}>
                 Cancel 
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
 
     onClickRegister(){
         console.log(' register ');
         // Validate empty condition 
         // Call api 
         const  {email,password} = this.state;
         this.setState({isLoading:true,error:'' }) ;
  }

  onClickCancel(){
    console.log(' cancel ');
    this.props.navigation.navigate('LoginScreen')
  }
 
}
