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
                        label: '3 Nov 2018',
                        value: 'football',
                    },
                    {
                        label: '8 Nov 2018',
                        value: 'baseball',
                    },
                    {
                        label: '7 Dec 2018',
                        value: 'hockey',
                    },
                ],
                items3: [
                    {
                        label: '2:00PM-3:00PM',
                        value: 'football',
                    },
                    {
                        label: '4:00PM-6:00PM',
                        value: 'baseball',
                    },
                    {
                        label: '7:30:00PM-9:00PM',
                        value: 'hockey',
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
                <Text>Name?</Text>
                <TextInput
                    ref={(el) => {
                        this.inputRefs.name = el;
                    }}
                    returnKeyType="next"
                    enablesReturnKeyAutomatically
                    onSubmitEditing={() => {
                        this.inputRefs.picker.togglePicker();
                    }}
                    style={homeStyle.inputIOS}
                    blurOnSubmit={false}
                />

                <View style={{ paddingVertical: 5 }} />

                <Text>What&rsquo;s your favorite color?</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'Select a color...',
                        value: null,
                    }}
                    items={this.state.items1}
                    onValueChange={(value) => {
                        this.setState({
                            citySelected: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.name.focus();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.picker2.togglePicker();
                    }}
                    style={homeStyle.inputIOS}
                    value={this.state.citySelected}
                    ref={(el) => {
                        this.inputRefs.picker = el;
                    }}
                />

                <View style={{ paddingVertical: 5 }} />

                <Text>What&rsquo;s your favorite sport?</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'Select a sport...',
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
                        this.inputRefs.company.focus();
                    }}
                    style={ homeStyle.inputIOS }
                    value={this.state.subcitySelected}
                    ref={(el) => {
                        this.inputRefs.picker2 = el;
                    }}
                />

                <View style={{ paddingVertical: 5 }} />

                <Text>Company?</Text>
                <TextInput
                    ref={(el) => {
                        this.inputRefs.company = el;
                    }}
                    returnKeyType="go"
                    enablesReturnKeyAutomatically
                    style={homeStyle.inputIOS}
                    onSubmitEditing={() => {
                        Alert.alert('Success', 'Form submitted', [{ text: 'Okay', onPress: null }]);
                    }}
                />
            
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