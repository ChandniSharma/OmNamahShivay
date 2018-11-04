import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity,AsyncStorage, TextInput} from 'react-native';

import volentierStyle from '../../styleFiles/volentier.style';
import loginStyle from '../../styleFiles/login.style';
import Header from '../common/Header';
import Card from '../common/Card';
import CardSection from '../common/CardSection';

export default class Volentierlist extends Component {

    constructor(props) {
        super(props);

        this.state = {
             arrayList : [{"name":"Ram", "address":"45/1, Baikunth Nagar","City":"Bhopal" ,"mobile":"+918518016290"}, {"name":"Laxman", "address":"45/1, Baikunth Nagar","City":"Bhopal","mobile":"+918518016290"}, {"name":"Devendra", "address":"45/1, Baikunth Nagar","City":"Bhopal","mobile":"+918518016290"}, {"name":"Rahul", "address":"45/1, Baikunth Nagar","City":"Bhopal","mobile":"+918518016290"},{"name":"Ankit", "address":"45/1, Baikunth Nagar","City":"Bhopal","mobile":"+918518016290"}],
        }
    }

    componentDidMount(){
        // call api for getting volentier list 

        
    }

    renderItem = (item, index) => {
        console.log(" Item is ",item.item);

        return(
            <View style={volentierStyle.viewOuter}>
            <View style={volentierStyle.viewInner}>
                <View >
                <Text style={volentierStyle.textTitle}>
                    {item.item.name}
                    </Text>
                    <Text style={volentierStyle.textDetail}>
                    {item.item.address}
                    </Text>
                    <Text style={volentierStyle.textDetail}>
                    {item.item.City}
                    </Text>
                </View>
               <View style={volentierStyle.viewContainNumber}>
                    <Text>
                    {item.item.mobile}
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
                    <FlatList style={volentierStyle.flatList}
                        data={this.state.arrayList}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
            </View>
        );
    }
}

