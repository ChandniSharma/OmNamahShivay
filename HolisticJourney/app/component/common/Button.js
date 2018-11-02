import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const Button = ({whenPress,btnDirection ,children}) =>{
const {buttonLeftStyle, textStyle, buttonRightStyle} = styles;

if (btnDirection ==='left') {
  return(
     <TouchableOpacity style={buttonLeftStyle} onPress={whenPress}>
            <Text style={textStyle}> 
            {children}
            </Text>
    </TouchableOpacity>
  );
} else {
    return(
     <TouchableOpacity style={buttonRightStyle} onPress={whenPress}>
            <Text style={textStyle}> 
            {children}
            </Text>
           </TouchableOpacity>
    );
}

}

const styles={
    buttonLeftStyle:{
       flex: 0.5,
        backgroundColor:'#fff',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 13,
        marginLeft: 30, 
        marginRight: 5,
        height:40
    //  alignSelf: 'stretch',
    },
    buttonRightStyle:{
        flex: 0.5,
         backgroundColor:'#fff',
         borderColor: 'gray',
         borderWidth: 1,
         borderRadius: 13,
         marginLeft: 5, 
         marginRight: 30,
         height:40
     //  alignSelf: 'stretch',
     },
     
    textStyle:{
      
      fontSize: 18,
      borderColor: 'black',
      alignSelf: 'center',
      backgroundColor: 'fff',
      paddingTop: 10,
      paddingBottom: 10,
    }
}
export default Button;