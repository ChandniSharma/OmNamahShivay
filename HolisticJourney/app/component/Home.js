import React, {Component} from 'react';
import {TouchableOpacity, View, Text,Alert, TextInput} from 'react-native';
import Header from './common/Header';
import loginStyle from '../styleFiles/login.style';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import ButtonWithIcon from './common/ButtonWithIcon';
import homeStyle from '../styleFiles/home.style';
import RNPickerSelect from 'react-native-picker-select';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

export default class Home extends Component {
   
    constructor(props){
        super(props);
        this.inputRefs = {};
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

             citySelected: undefined,
                items1: [
                    {
                        label: 'Khandwa',
                        value: 'red',
                    },
                    {
                        label: 'Bhopal',
                        value: 'orange',
                    },
                    {
                        label: 'Indore',
                        value: 'blue',
                    },
                ],
                subcitySelected: undefined,
                items2: [
                    {
                        label: 'MP Nagar',
                        value: 'football',
                    },
                    {
                        label: 'Arera colony',
                        value: 'baseball',
                    },
                    {
                        label: 'Habibganj',
                        value: 'hockey',
                    },
                ],
                typeSelected: undefined,
                    items3:[
                        {
                            label: 'A',
                            value: '01',
                        },{
                            label: 'B',
                            value: '02',
                        },
                    ],
                dateSelected:undefined,
                    items4:[
                        {
                            label: '20 Nov 2018',
                            value: 'date1',
                        },{
                            label: '21 Nov 2018',
                            value: 'date2',
                        },
                        {
                            label: '28 Nov 2018',
                            value: 'date3',
                        },{
                            label: '29 Nov 2018',
                            value: 'date4',
                        },
                    ],
                    timeSelected: undefined,
                items5: [
                    {
                        label: '2:00PM-3:00PM',
                        value: 'T1',
                    },
                    {
                        label: '4:00PM-6:00PM',
                        value: 'T2',
                    },
                    {
                        label: '7:30:00PM-9:00PM',
                        value: 'T3',
                    },
                ],

            };
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                citySelected: 'red',
            });
        }, 1000);

        // // parent can also update the `items` prop
        // setTimeout(() => {
        //     this.setState({
        //         items: this.state.items.concat([{ value: 'purple', label: 'Purple' }]),
        //     });
        // }, 2000);
    }
       
    render() {
        return (
            <View style={loginStyle.container}>
                         <Header />

                         <KeyboardAwareScrollView>

                         </KeyboardAwareScrollView>
                        <View style={{marginTop:'15%', backgroundColor: 'yellow' }} />
                   <View style={homeStyle.innerContainer}>
                        <Text style={homeStyle.textTitle}>Please select you city</Text>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Select city',
                                value: null,
                                fontSize: 18,
                                backgroundColor:'yellow'
                            }}
                            
                            placeholderTextColor={'red'}
                            items={this.state.items1}
                            onValueChange={(value) => {
                                this.setState({
                                    citySelected: value,
                                });
                            }}
                            onUpArrow={() => {
                                //this.inputRefs.name.focus();
                            }}
                            onDownArrow={() => {
                                this.inputRefs.picker2.togglePicker();
                            }}
                            style={{padding: 20,}}
                            value={this.state.citySelected}
                            ref={(el) => {
                                this.inputRefs.picker = el;
                            }}
                        />

                        <View style={{ paddingVertical:'10%', backgroundColor:'' }} />

                        <Text style={homeStyle.textTitle}>Please select your subCity</Text>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Select subcity',
                                value: null,
                            }}
                            items={this.state.items2}
                            onValueChange={(value) => {
                                this.setState({
                                    subcitySelected: value,
                                });
                            }}
                            onUpArrow={() => {
                                this.inputRefs.picker.togglePicker();
                            }}
                            onDownArrow={() => {
                                this.inputRefs.picker3.togglePicker();
                            }}
                            style={ homeStyle.inputIOS }
                            value={this.state.subcitySelected}
                            ref={(el) => {
                                this.inputRefs.picker2 = el;
                            }}
                />
                <Text style={homeStyle.textTitle}>Please select type</Text>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Select type',
                                value: null,
                            }}
                            items={this.state.items3}
                            onValueChange={(value) => {
                                this.setState({
                                    typeSelected: value,
                                });
                            }}
                            onUpArrow={() => {
                                this.inputRefs.picker2.togglePicker();
                            }}
                            onDownArrow={() => {
                                this.inputRefs.picker4.togglePicker();
                            }}
                            style={ homeStyle.inputIOS }
                            value={this.state.typeSelected}
                            ref={(el) => {
                                this.inputRefs.picker3 = el;
                            }}
                />
                <Text style={homeStyle.textTitle}>Please select date</Text>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Select date',
                                value: null,
                            }}
                            items={this.state.items4}
                            onValueChange={(value) => {
                                this.setState({
                                    dateSelected: value,
                                });
                            }}
                            onUpArrow={() => {
                                this.inputRefs.picker3.togglePicker();
                            }}
                            onDownArrow={() => {
                                this.inputRefs.picker5.togglePicker();
                            }}
                            style={ homeStyle.inputIOS }
                            value={this.state.dateSelected}
                            ref={(el) => {
                                this.inputRefs.picker4 = el;
                            }}
                />
                <Text style={homeStyle.textTitle}>Please select type</Text>
                                        <RNPickerSelect
                                            placeholder={{
                                                label: 'Select time',
                                                value: null,
                                            }}
                                            items={this.state.items5}
                                            onValueChange={(value) => {
                                                this.setState({
                                                    timeSelected: value,
                                                });
                                            }}
                                            onUpArrow={() => {
                                                this.inputRefs.picker4.togglePicker();
                                            }}
                                            onDownArrow={() => {
                                                // this.inputRefs.picker4.togglePicker();
                                            }}
                                            style={ homeStyle.inputIOS }
                                            value={this.state.timeSelected}
                                            ref={(el) => {
                                                this.inputRefs.picker5 = el;
                                            }}
                                />
                <View style={{ paddingVertical: '5%', backgroundColor:'' }} />
            
            {/* <Text style={[homeStyle.textStyle, color='green']}> Slot available</Text> */}

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
                </View>
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