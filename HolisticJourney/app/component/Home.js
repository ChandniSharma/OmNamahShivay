import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Header from './common/Header';
import loginStyle from '../styleFiles/login.style';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import ButtonWithIcon from './common/ButtonWithIcon';
import homeStyle from '../styleFiles/home.style';
import Picker from 'react-native-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

export default class Home extends Component {
   
    constructor(props){
        super(props);

        this.state = {
            // response:this.navigation.state.params.response,
            PickerValueHolder : '',
            arrayPatient:[],
            city: ['Knw', 'Bpl', 'Indore'],
            subCity:['Baikunth Nagar', 'Arera Colony', 'Nanda Nagar'],
            date: ['3 Nov 2018','8 Nov 2018','7 Dec 2018'],
            slots: ['2:00PM-3:00PM','4:00PM-6:00PM','7:30:00PM-9:00PM'],
            error:'',
            response:[{'id':1}],
            isLoading: false,
            isLoggedIn: false,
        }
    }
    componentDidMount(){
    }
       
    render(){
        return (
            <View style={loginStyle.Container}> 
                <Header />  
                <KeyboardAwareScrollView style={loginStyle.Container}>

                <Card>
            <CardSection>
            <ButtonWithIcon iconName={''} whenPress={this.onClickCity.bind(this)}>
                            City
            </ButtonWithIcon>
          </CardSection>
          <CardSection>
            <ButtonWithIcon iconName={''} whenPress={this.onClickSubCity.bind(this)}>
                            Sub-city
            </ButtonWithIcon>
          </CardSection>
          <CardSection>
            <ButtonWithIcon iconName={''} whenPress={this.onClickType.bind(this)}>
                            Type
            </ButtonWithIcon>
          </CardSection>
          <CardSection>
            <ButtonWithIcon iconName={''} whenPress={this.onClickTypeDate.bind(this)}>
                            Dates available
            </ButtonWithIcon>
          </CardSection>
          <CardSection>
            <ButtonWithIcon iconName={''} whenPress={this.onClickTime.bind(this)}>
                            Time
            </ButtonWithIcon>
          </CardSection>

            <Text style={[homeStyle.textStyle, color='green']}> Slot available</Text>

            <CardSection style={{flex: 1,flexDirection: 'row', justifyContent:'space-evenly'}} >
                            <Button btnDirection={'left'} whenPress={this.onClickAddPatient.bind(this)}>
                            Add Patient
                            </Button>
                    </CardSection>

                    <CardSection style={{flex: 1,flexDirection: 'row', justifyContent:'space-evenly'}} >
                            <Button btnDirection={'left'} whenPress={this.onClickBook.bind(this)}>
                            Book
                            </Button>
                    </CardSection>
                   
                </Card>
                </KeyboardAwareScrollView>
                </View>
        );

    }
    onClickBook(){
        console.log(' Book ');
        // Validate empty condition 
        // Call api 
        const  {email,password} = this.state;
        this.setState({isLoading:true,error:'' }) ;
        console.log(' Book ', this.state.response);
        this.props.navigation.navigate('Receipt')
 }
 onClickAddPatient(){
     console.log('On click add patient');
     this.props.navigation.navigate('AddPatient',{response:this.state.response})

 }
 onClickCity(){
        
  }
  onClickSubCity(){
        
}
onClickType(){
        
}
onClickTypeDate(){
        
}
onClickTime(){
        
}
}