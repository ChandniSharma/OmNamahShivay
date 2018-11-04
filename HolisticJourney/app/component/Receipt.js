import React, {Component} from 'react';
import { TextInput, View,Alert, ScrollView, Text} from 'react-native';
import Header from './common/Header';
import loginStyle from '../styleFiles/login.style';
import * as constants from '../Constants/Constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import receiptStyle from '../styleFiles/receipt.style';
import Button from './common/Button';
import CardSection from './common/CardSection';

export default class Receipt extends Component {

    render(){
        return(
            <View style={[loginStyle.Container]}> 
                <Header />  
               
          {/* <ScrollView> */}
            <View style={receiptStyle.container}>
            <View>           
                <Text style={receiptStyle.titleBookConfirmation}>
                        Appointment Confirmation 
                        </Text>
                <Text style={receiptStyle.textThankyou}> Thank you for using Holistic Journey </Text>
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={receiptStyle.textTitleTokenId}> Your Token ID is </Text>
                <Text style={receiptStyle.textTokenID}> #12345678 </Text>
            </View>
           
            <View style={{alignItems:'center'}}>
                <Text style={receiptStyle.textTitleBookTime}> Patients Are </Text>

                <View style={receiptStyle.viewInnerPatientName}>
                    <Text style={receiptStyle.textTimeDetail}> Ganesha </Text>
                    <Text style={receiptStyle.textTimeDetail}> +918212345678 </Text>
                </View>
                <View style={receiptStyle.viewInnerPatientName}>
                    <Text style={receiptStyle.textTimeDetail}> Shiva </Text>
                    <Text style={receiptStyle.textTimeDetail}> +919212345679 </Text>
                </View>
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={receiptStyle.textTitleBookTime}> Appointment Time </Text>
                <Text style={receiptStyle.textTimeDetail}> 22nd August 2018 | Tuesday | 11:00 AM </Text>
                <Text style={receiptStyle.textTimeDetail}>Bhopal, Arera Colony </Text>
                <CardSection style={{flex: 1,flexDirection: 'row', justifyContent:'space-evenly'}} >
                    <Button btnDirection={'left'} whenPress={()=> this.props.navigation.navigate('Home')}>
                    Back To Home
                    </Button>
                </CardSection>
            </View>
            </View>
          {/* </ScrollView> */}
            </View>
        );
    }
}