import React, {Component} from 'react';
import {TouchableOpacity, View, Text, TextInput, Button,FlatList,concat, trim} from 'react-native';

import Header from './common/Header';
import loginStyle from '../styleFiles/login.style';
import styles from '../styleFiles/addPatient.style';
import ButtonBottom from './common/Button';
import CardSection from './common/CardSection';
import ListItem from './ListItem';

export default class AddPatient extends Component {
constructor(props){
    super(props);
    this.state={
        arrayPatient:['a', 'b'],
    }
}
state = {
    placeName: '',
    places: []
}

placeSubmitHandler = () => {
    if(this.state.placeName.trim() === '') {
    return;
    }
    this.setState(prevState => {
      return {
            places: prevState.places.concat({
        key: Math.random(), 
        value: prevState.placeName
       })
       }
   });
   this.setState({
      placeName: ''
   });	
}

placeNameChangeHandler = (value) => {
  this.setState({
      placeName: value
    });    
}

placesOutput = () => {
   return (
    <FlatList style = { styles.listContainer }
       data = { this.state.places }
       keyExtractor={(item, index) => index.toString()}
           renderItem = { info => (
          <ListItem 
                placeName={ info.item.value }
           />
         )}
    />
    )
}


    render(){
        return (
            <View style={ styles.container }>
               <View style = { styles.inputContainer }>
                <TextInput
                   placeholder = "Seach Places"
                   style = { styles.placeInput }
                           value = { this.state.placeName }
                   onChangeText = { this.placeNameChangeHandler }
                ></TextInput>
                <Button title = 'Add' 
                   style = { styles.placeButton }
                   onPress = { this.placeSubmitHandler }
                />
                </View>
                    <View style = { styles.listContainer }>
                { this.placesOutput() }
                </View>
            </View>
            );
    }
    onClickBack(){
       this.props.navigation.navigate('Home',{arrayPatient:this.state.arrayPatient});
    }
}
