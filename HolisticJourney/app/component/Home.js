import React, {Component} from 'react';
import {TouchableOpacity, View, Text,Alert, TextInput, StyleSheet} from 'react-native';
import Header from './common/Header';
import loginStyle from '../styleFiles/login.style';
import Button from './common/Button';
import Card from './Home/CardHome';
import CardSection from './common/CardSection';
import Input from './common/Input';
import ButtonWithIcon from './common/ButtonWithIcon';
import homeStyle from '../styleFiles/home.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import SimplePicker from 'react-native-simple-picker';
import * as constants from '../Constants/Constants';

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
            isCitySelected:false,
            isSubcitySelected:false,
            isTypeSelected:false,
            isDateSelected:false,
            isTimeSelected: false,
            isPatientAdded: false,
        } 
    }
       
    render() {

      let buttonSubCity, buttonType, buttonDate, buttonTime;
      if (this.state.isCitySelected) {
        buttonSubCity = <ButtonWithIcon btnDirection={'left'} whenPress={() => {
          this.refs.pickerSubcity.show();
        }}>
         {this.state.selectedSubCity}
       </ButtonWithIcon>
      } else {
        buttonSubCity = <ButtonWithIcon btnDirection={'left'} whenPress={() => {
          Alert.alert(
            '',
            constants.msgCitySelect,
            [
              {text: constants.titleOk, onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: false }
          )
        }}>
         {this.state.selectedSubCity}
       </ButtonWithIcon>
      }
      if(this.state.isSubcitySelected){
        buttonType =  <ButtonWithIcon btnDirection={'left'} whenPress={() => {
          this.refs.pickerType.show();
        }}>
         {this.state.selectedType}
        </ButtonWithIcon>  
      }else{
        buttonType =  <ButtonWithIcon btnDirection={'left'} whenPress={() => {
          Alert.alert(
            '',
            constants.msgSubCitySelect,
            [
              {text: constants.titleOk, onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: false }
          )
        }}>
         {this.state.selectedType}
         </ButtonWithIcon>  
      }

      if (this.state.isTypeSelected) {
        buttonDate = <ButtonWithIcon btnDirection={'left'} whenPress={() => {
          this.refs.pickerDate.show();
        }}>
        {this.state.selectedDate}
      </ButtonWithIcon> 
      } else {
        buttonDate = <ButtonWithIcon btnDirection={'left'} whenPress={() => {
          Alert.alert(
            '',
            constants.msgTypeSelect,
            [
              {text: constants.titleOk, onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: false }
          )
        }}>
        {this.state.selectedDate}
      </ButtonWithIcon> 
      }

      if (this.state.isDateSelected) {
          buttonTime = <ButtonWithIcon btnDirection={'left'} whenPress={() => {
              this.refs.pickerTimeSlot.show();
            }}>
            {this.state.selectedTimeSlot}
          </ButtonWithIcon> 
      } else {
            buttonTime = <ButtonWithIcon btnDirection={'left'} whenPress={() => {
              Alert.alert(
                '',
                constants.msgDateSelect,
                [
                  {text: constants.titleOk, onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
              )
            }}>
            {this.state.selectedTimeSlot}
          </ButtonWithIcon> 
      }
        

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
              {buttonSubCity}
          </CardSection>  

          <CardSection>
                   {buttonType}
              </CardSection>  

           <CardSection>
            {buttonDate} 
              </CardSection>  

            <CardSection>
            {buttonTime} 
              </CardSection>  
          </Card>  

{/* Here defining all pickers for their type  */}

            <SimplePicker
              ref={'pickerCity'}
              options={arrayCity}
              onSubmit={(option) => {
                
                this.setState({
                  selectedCity: option,
                  isCitySelected: true,
                  //  isDateSelected: false,
                  
                });
               
              }}
            />
    
            <SimplePicker
              ref={'pickerSubcity'}
              options={arraySubCity}
              onSubmit={(option) => {
                this.setState({
                  selectedSubCity: option,
                  isSubcitySelected: true,
                  // isDateSelected: false,
                });
              }}
            />
             <SimplePicker
              ref={'pickerType'}
              options={arrayType}
              onSubmit={(option) => {
                this.setState({
                  selectedType: option,
                  isTypeSelected: true,
                   
                  
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
   
      onClickTime(){
        if (this.state.isDateSelected){
          this.refs.pickerTimeSlot.show();
        }else{
          console.log('Select time ')
        }
        
      }
    
    onClickBook(){
        console.log(' Book ');
        // Validate empty condition 
        // Call api 
        const  {email,password} = this.state;
        this.setState({isLoading:true,error:'' }) ;

       let alertMessage = '';
        if (this.state.isCitySelected && this.state.isSubcitySelected && this.state.isTypeSelected && this.state.isDateSelected && this.state.isTimeSelected) {
          this.props.navigation.navigate('Receipt')
        } else {
          if (!this.state.isCitySelected) {
            alertMessage = constants.msgCitySelect;
          } else {
            if (!this.state.isSubcitySelected) {
              alertMessage = constants.msgSubCitySelect;
            } else {
              if (!this.state.isTypeSelected) {
                alertMessage = constants.msgTypeSelect;
              } else {
                if (!this.state.isDateSelected) {
                  alertMessage = constants.msgDateSelect;
                } else {
                  if (!this.state.isTimeSelected) {
                    alertMessage = constants.msgTimeSelect;
                  } else {
                    if (!this.state.isPatientAdded) {
                      alertMessage = constants.msgAddPatient;
                    } else {
                      this.props.navigation.navigate('Receipt',{response:this.state.response})

                    }
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