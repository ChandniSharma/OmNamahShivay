import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text, Alert, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import ListItem from './ListItem';
import Header from './common/Header';
import loginStyle from '../styleFiles/login.style';
import addPatientStyle from '../styleFiles/addPatient.style';
import ButtonBottom from './common/Button';
import CardSection from './common/CardSection';
import InputPatient from './InputPatient';
import * as constants from '../Constants/Constants';

const DismissKeyboardHOC = (Comp) => {
    return ({ children, ...props }) => (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Comp {...props}>
          {children}
        </Comp>
      </TouchableWithoutFeedback>
    );
  };
  const DismissKeyboardView = DismissKeyboardHOC(View)
  
export default class AddPatient extends Component {

state = {
    placeName: '',
    places: [],
    mobile: '',
}

 componentDidMount(){

 }
 componentWillMount(){
     
 }

placeSubmitHandler = () => {
    let alertMessage=''; 
    if(this.state.placeName.trim() === '' || this.state.mobile.trim() === '') {
    return;
    }else{
        if (this.state.mobile.length === 0 || this.state.mobile.length!=10) {
            Alert.alert(
                '',
                constants.msgMobileNumber,
                [
                  {text: constants.titleOk, onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
              )
              return;
            } else{
                if(this.state.places.length>4){
                    Alert.alert(
                        '',
                        constants.msgPatientAddLimit,
                        [
                          {text: constants.titleOk, onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        ],
                        { cancelable: false }
                      )
                       return;   
                }
            }
    }
  
    this.setState(prevState => {
      return {
            places: prevState.places.concat({
        key: Math.random(), 
        value: prevState.placeName+' '+'-'+' '+prevState.mobile
       })
       }
   });
   this.setState({
      placeName: '',
      mobile: ''
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
             onItemPressed={() => this.onItemDeleted(info.item.key)}
           />
         )}
    />
    )
}

onItemDeleted = (key) => {
   this.setState(prevState => {
      return {
         places: prevState.places.filter(place => {
            return place.key !== key;
      })
    }
    })
}

render() {
   return (
    <View style={loginStyle.Container}> 
     <Header isAnimatable={'No'}/>  
    <View style={ styles.container }>
    {/* <Text style= {addPatientStyle.textTitle}>
        Add Patient Detail
    </Text> */}

 <DismissKeyboardView style = { styles.inputContainer }>

 
       {/* <View style = { styles.inputContainer }> */}

              <InputPatient 
                    label={'Patient Name'}
                    placeholder={'Chandni'}
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangeHandler }
                    />
         <InputPatient 
                    label={'Mobile'}
                    prefix={'+91'}
                    placeholder={'+918518016290'}
                    value={this.state.mobile}
                    keyboardType='number-pad'
                    onChangeText={text => this.setState({mobile:text})}
                    />
         
        {/* <Button title = ''
           style = {  }
           onPress = { this.placeSubmitHandler }
        >
        </Button> */}
        <TouchableOpacity style={styles.placeButton} onPress={ this.placeSubmitHandler  }>
               <Image source={require('../assets/plusIcon.png')} style={styles.imageStyle } />
            </TouchableOpacity>
        {/* </View> */}
        </DismissKeyboardView>
            <View style = { styles.listContainer }>
        { this.placesOutput() }
        </View>
        <View style={addPatientStyle.viewBottom}>
            <Text style={addPatientStyle.textNote}>
                Note: You can add upto 5 patients.
            </Text>
            <CardSection style={{flex: 1,flexDirection: 'row', alignItems: 'center',}} >
                        <ButtonBottom btnDirection={'left'} whenPress={()=> this.props.navigation.navigate('Home',{
        arrayP: this.state.places,
        otherParam: 'anything you want here',
      })}>
                        Back To Home
                        </ButtonBottom>
                    </CardSection>
         </View>      
      </View>
    </View>
    );
  }
  onClickBack(){
      console.log('on click back in add patient ');
    this.props.navigation.navigate('Home',{
        itemId: 86,
        otherParam: 'anything you want here',
      });
   }
}

const styles = StyleSheet.create({
      container: {
    	   paddingTop: '5%',
    	  justifyContent: 'flex-start',
    	  alignItems: 'center',
      },
      inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    //   marginTop:'8%'
      },
      placeInput: {
      width: '40%',
      left:10,
      borderColor: 'gray',
        borderWidth: 1,
         borderRadius: 10,
        height: 40,
        backgroundColor:'#ffffff',
      },
      mobile: {
        width: '40%',
        borderColor: 'gray',
          borderWidth: 1,
           borderRadius: 10,
          height: 40,
          backgroundColor:'#ffffff',
          right:10
        },

      placeButton: {
       width: '20%',
       paddingLeft:'2%'
      },
      listContainer: {
        paddingTop:'5%',
      width: '100%'
      },
      imageStyle:{
        width:32,
        height:32,
       
    },

});