import React, {Component} from 'react';
import {TouchableOpacity, View, Text,Alert, TextInput, StyleSheet} from 'react-native';
import Header from './Home/HeaderHome';
import loginStyle from '../styleFiles/login.style';
import Button from './common/Button';
import Card from './Home/CardHome';
import CardSection from './common/CardSection';
import Input from './common/Input';
import ButtonWithIcon from './common/ButtonWithIcon';
import homeStyle from '../styleFiles/home.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
 import SimplePicker from 'react-native-simple-picker';

 const arrayCity = ['Bhopal', 'Indore', 'Khandwa'];
 const arraySubCity = ['Baikunth Nagar', 'Arera Colony', 'Habibganj'];
 const arrayType = ['A', 'B'];
 const arrayDate = ['3 Nov 2018', '8 Nov 2018', '7 Dec 2018'];
 const arrayTimeSlots = ['2:00PM-3:00PM', '4:00PM-6:00PM', '7:30:00PM-9:00PM'];

export default class Home extends Component {
   
    constructor(props){
        super(props);
        
        this.state = {
            // response:this.navigation.state.params.response,
            // city: ['Knw', 'Bpl', 'Indore'],
            // subCity:['Baikunth Nagar', 'Arera Colony', 'Nanda Nagar'],
            // date: ['3 Nov 2018','8 Nov 2018','7 Dec 2018'],
            // slots: ['2:00PM-3:00PM','4:00PM-6:00PM','7:30:00PM-9:00PM'],
            error:'',
            response:[{'id':1}],
            isLoading: false,
            isLoggedIn: false,
            selectedCity: 'Click here to select city',
            selectedSubCity:'Click here to select subCity',
            selectedDate: 'Click here to select date',
            selectedTimeSlot:'Click here to select time',
            selectedType:'Click here to select type',
            isDateSelected:false,
            isTimeSelected: false,
        } 
    }
       
    render() {
        return (
            <View style={loginStyle.Container}>
                        <Header />
            <KeyboardAwareScrollView style={homeStyle.scrollViewStyle}> 
                <Card>
            <CardSection>
            <ButtonWithIcon btnDirection={'left'} whenPress={() => {
                  this.refs.pickerCity.show();
                }}>
                 {this.state.selectedCity}
               </ButtonWithIcon>
          </CardSection>    
         
          <CardSection>
          <ButtonWithIcon btnDirection={'left'} whenPress={() => {
                  this.refs.pickerSubcity.show();
                }}>
                 {this.state.selectedSubCity}
               </ButtonWithIcon>
               
          </CardSection>  

          <CardSection>
          <ButtonWithIcon btnDirection={'left'} whenPress={() => {
                  this.refs.pickerType.show();
                }}>
                 {this.state.selectedType}
               </ButtonWithIcon>            
              </CardSection>  

           <CardSection>
            <ButtonWithIcon btnDirection={'left'} whenPress={() => {
                    this.refs.pickerDate.show();
                  }}>
                  {this.state.selectedDate}
                </ButtonWithIcon>  
              </CardSection>  

            <CardSection>
            <ButtonWithIcon btnDirection={'left'} whenPress={() => {
                    this.refs.pickerTimeSlot.show();
                  }}>
                  {this.state.selectedTimeSlot}
                </ButtonWithIcon> 
              </CardSection>  
          </Card>  

{/* Here defining all pickers for their type  */}

            <SimplePicker
              ref={'pickerCity'}
              options={arrayCity}
              onSubmit={(option) => {
                
                this.setState({
                  selectedCity: option,
                  isDateSelected: false,
                  isTimeSelected: false,
                });
               
              }}
            />
    
            <SimplePicker
              ref={'pickerSubcity'}
              options={arraySubCity}
              onSubmit={(option) => {
                this.setState({
                  selectedSubCity: option,
                  isTimeSelected: false,
                });
              }}
            />
             <SimplePicker
              ref={'pickerType'}
              options={arrayType}
              onSubmit={(option) => {
                this.setState({
                  selectedType: option,
                  isTimeSelected: false,
                  
                });
              }}
            />
            <SimplePicker
              ref={'pickerDate'}
              options={arrayDate}
              onSubmit={(option) => {
                this.setState({
                  selectedDate: option,
                  isDateSelected: true,
                });
              }}
            />
          <SimplePicker
              ref={'pickerTimeSlot'}
              options={arrayTimeSlots}
              onSubmit={(option) => {
                this.setState({
                  selectedTimeSlot: option,
                  isTimeSelected: true,
                });
              }}
            />

    {/* isTimeSelected?<Text>Slots Available</Text>:<Text> Checking </Text> */}

    {/* <CardSection style={{flex: 1,flexDirection: 'row', justifyContent:'space-evenly'}} > */}

 <TouchableOpacity style={homeStyle.buttonAddPatient} onPress={this.onClickAddPatient.bind(this)}>
            <Text style={homeStyle.textStyleBottomBtn}> 
            Add Patient
            </Text>
    </TouchableOpacity>

        <TouchableOpacity style={homeStyle.buttonBook} onPress={this.onClickBook.bind(this)}>
            <Text style={homeStyle.textStyleBottomBtn}> 
            Book
            </Text>
    </TouchableOpacity>          

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
    let data = [];
    for(var i=0;i<100;i++){
        data.push(i);
    }
let pickeroptions = [
    {pickerData: data},
    {selectedValue: [59]}
];

 Picker.init({
     
 })
    Picker.init({
        pickerData: data,
        selectedValue: [59]
    }); 
    Picker.show();
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#efecc9',
    },
  
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  
    paragraph: {
      textAlign: 'center',
      color: '#002f2f',
      marginBottom: 5,
      fontWeight: 'bold',
      fontSize: 18,
    },
  });