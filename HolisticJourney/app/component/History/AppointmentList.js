import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity,AsyncStorage, TextInput} from 'react-native';

import historyStyle from '../../styleFiles/history.style';

import loginStyle from '../../styleFiles/login.style';
import Header from '../common/Header';

export default class AppointmentList extends Component {

    constructor(props) {
        super(props);

        this.state = {
             arrayList : [{"TokenID":"#121256", "Date":"12th September 2018","PersonCount":"2 Persons" ,"address":"45/1, Baikunth Nagar","City":"Bhopal", "time":"6:00pm-7:00pm"},

             {"TokenID":"#123462", "Date":"18th September 2018","PersonCount":"2 Persons" ,"address":"45/1, Baikunth Nagar","City":"Bhopal", "time":"6:00pm-7:00pm"},

             {"TokenID":"#123896", "Date":"12th October 2018","PersonCount":"1 Persons" ,"address":"45/1, Baikunth Nagar","City":"Bhopal", "time":"9:00pm-10:00pm"},

             {"TokenID":"#127656", "Date":"12th September 2018","PersonCount":"5 Persons" ,"address":"45/1, Baikunth Nagar","City":"Bhopal", "time":"4:00pm-5:00pm"},

             {"TokenID":"#123456", "Date":"12th September 2018","PersonCount":"2 Persons" ,"address":"45/1, Baikunth Nagar","City":"Bhopal", "time":"6:00pm-7:00pm"}


            ],
        }
    }

    componentDidMount(){
        // call api for getting volentier list 
    }

    renderItem = (item, index) => {
        console.log(" Item is ",item.item);
        let strTokenId = "TokenId: "+item.item.TokenID;

        return(
            <View style={historyStyle.viewOuter}>
            <View style={historyStyle.viewInner}>
                <View >
                <Text style={historyStyle.textTitle}>
                    {strTokenId}
                    </Text>
                    <Text style={historyStyle.textTimeAndDate}>
                    {item.item.Date}
                    </Text>
                    <Text style={historyStyle.textTimeAndDate}>
                    {item.item.time}
                    </Text>
                    <Text style={historyStyle.textDetail}>
                    {item.item.address}
                    </Text>
                    <Text style={historyStyle.textDetail}>
                    {item.item.City}
                    </Text>
                </View>
               <View style={historyStyle.viewContainNumber}>
                    <Text>
                    {item.item.PersonCount}
                    </Text>
               </View>  
              </View>           
            </View>);
                
        
    }

    render() {
        console.log( )
        return (
            <View style={loginStyle.Container}> 
                <Header />  
                    <FlatList style={historyStyle.flatList}
                        data={this.state.arrayList}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
            </View>
        );
    }
}

